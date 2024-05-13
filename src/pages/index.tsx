import React from "react";
import { FaCheck } from "react-icons/fa";
import "cal-sans";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbAuth2Fa } from "react-icons/tb";
import { FaCopy } from "react-icons/fa";
import OtpInput from "react-otp-input";
import dynamic from "next/dynamic";
import { ConnectKitButton } from "connectkit";
import { createConfig, http, useAccount } from "wagmi";
import { FhevmInstance } from "fhevmjs";
import { generateFourDigitSecret, toHexString } from "@/utils/crypto";
import { readContract } from "@wagmi/core";
import { getInstance } from "@/utils/fheevm";
import { TOTP } from "@/utils/TOTP";
import { inco } from "@/utils/web3provider";
import toast from "react-hot-toast/headless";
import { useRouter } from "next/router";
const ModalPortal = dynamic(() => import("@/components/Modal"), { ssr: false });
let instance: FhevmInstance;

export default function Home() {
  const [onboarding, setOnboarding] = useState("false");
  const [passcode, setPasscode] = useState("");
  const { address } = useAccount();
  const [verified, setVerified] = useState(false);
  const [encryptedData, setEncryptedData] = useState("");
  const [otp, setOTP] = useState<string>("");
  const [seconds, setSeconds] = useState(30);
  const [timestamp, setTimestamp] = useState(0);
  const [generatedPin, setGeneratedPin] = useState("");
  const router = useRouter();

  const handleValidate = () => {
    const inputInt = parseInt(otp);
    if (instance) {
      const encrypted = instance.encrypt32(inputInt);
      setEncryptedData(toHexString(encrypted));
      validateOTP(toHexString(encrypted));
    }
  };

  const validateOTP = async (value: any) => {
    if (!address) return;

    const config = createConfig({
      chains: [inco],
      transports: {
        [inco.id]: http(),
      },
    });
    const result = await readContract(config, {
      abi: TOTP.abi,
      address: "0x4d76178c3a4f2fd60ed38374f8c1acbb2a747f90",
      functionName: "validateTOTP",
      args: [`0x${value}`, timestamp],
    });
    if (result) {
      toast("OTP Validated!");
      router.push("/gallery");
    }
  };

  useEffect(() => {
    const regenerateTimestamp = () => {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const last5TimeStamp = currentTimestamp % 100000;
      const pin = localStorage.getItem("pin");
      const pinInt = parseInt(pin as string);
      const secret = generateFourDigitSecret(pinInt, address as string);
      // console.log("generated PIN:", secret)
      setGeneratedPin(secret);
      setTimestamp(currentTimestamp);
      console.log(last5TimeStamp * parseInt(generatedPin));
      setOTP(`${last5TimeStamp * parseInt(generatedPin)}`);
      console.log("GENERATED TOTP", last5TimeStamp * parseInt(generatedPin));
    };
    const timer = setInterval(() => {
      if (seconds === 30) {
        regenerateTimestamp();
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
        setSeconds(30);
      }
    }, 1000);
    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [seconds]);

  // fetch FHE wasm
  useEffect(() => {
    async function fetchInstance() {
      instance = await getInstance();
    }
    fetchInstance();
  }, []);
  return (
    <>
      <main>
        <section className="bg-dark">
          <div className="flex flex-col items-center justify-center min-h-screen text-white layout">
            <div className="max-w-[650px] text-center rounded flex-col flex items-center gap-5 p-5">
              <h1 style={{ fontFamily: "Cal Sans" }}> 🏛️ FHE Vault</h1>
              <h2
                className="text-gray-300 text-[25px] "
                style={{ fontFamily: "Cal Sans" }}
              >
                Enable Multi Factor authentication and secure your files. Store
                and own your data.
              </h2>
              <button
                onClick={() => setOnboarding("true")}
                className="bg-yellow-400 font-semibold hover:opacity-90 text-gray-600 border-b-[2px] border-r-[2px] rounded p-[5px] border-yellow-500"
              >
                Get Started
              </button>
            </div>

            <footer className="absolute text-gray-300 font-mono bottom-2">
              powered by{" "}
              <a
                href="https://fluf-id.vercel.app"
                className="text-gray-300 hover:underline "
              >
                fluf.id
              </a>
            </footer>
          </div>
        </section>
        <OnboardingModal
          onboarding={onboarding}
          handleValidate={handleValidate}
          setOnboarding={setOnboarding}
        />
      </main>
    </>
  );
}

const OnboardingModal = ({
  onboarding,
  setOnboarding,
  handleValidate,
}: any) => {
  const [mode, setMode] = useState("login");

  return (
    <>
      {onboarding && (
        <ModalPortal closeModal={() => setOnboarding(false)}>
          <div className=" bg-[#0a0a0a]  relative text-[#d4d4d4] border-gray-800 rounded-lg  gap-2 p-8 px-[110px] border flex flex-col items-center">
            <div className="absolute top-5 right-5 p-[2px] cursor-pointer rounded-full border-gray-100 border-[1px] ">
              {" "}
              <IoClose className="" onClick={() => setOnboarding(false)} />
            </div>
            <h1
              style={{ fontFamily: "Cal Sans" }}
              className="text-[25px] text-yellow-500 p-[10px]"
            >
              {" "}
              🏛️ FHE Vault
            </h1>

            {mode === "login" && (
              <LoginFlow
                handleValidate={handleValidate}
                mode={mode}
                setMode={setMode}
              />
            )}
            {mode === "signup" && <SignUpFlow mode={mode} setMode={setMode} />}
          </div>
        </ModalPortal>
      )}
    </>
  );
};

const SignUpFlow = ({ mode, setMode }: any) => {
  return (
    <>
      <p className="text-gray-300 font-semibold font-mono text-start w-full mt-3">
        Sign up using fluf.id
      </p>
      <div className="flex  flex-col w-full mx-2 my-5">
        <div className="w-full gap-4 flex flex-row">
          <div className="flex flex-col flex-grow">
            <div className="p-[10px] text-2xl  cursor-pointer rounded-full border-green-500 text-green-500 border-[2px]">
              <FaCheck />
            </div>
            <div className="w-[1px] h-full mx-auto flex-grow bg-[#464f5e]"></div>
          </div>
          <div className="h-full flex flex-col w-full gap-[10px] items-center">
            <h3 className="text-sm text-gray-300">
              Sign up with your desired wallet
            </h3>
            <span className="mb-[30px]">
              <ConnectKitButton />
            </span>
          </div>
        </div>
        {/* step2 */}
        <div className="w-full gap-4 flex flex-row">
          <div className="flex  flex-col flex-grow">
            <div className="p-[10px] text-2xl   cursor-pointer rounded-full border-[#464f5e] text-[#464f5e] border-[2px]">
              <TbAuth2Fa />
            </div>
            {/* <div className='w-[1px] h-full mx-auto flex-grow bg-[#464f5e]'></div> */}
          </div>
          <div className="h-full flex flex-col w-full gap-[10px] items-center">
            <h3 className="text-sm text-gray-300">
              Setup Multi Factor Authentication
            </h3>
            <div className="px-5 flex flex-col gap-2 py-2 text-center  rounded border border-[#474F5E]  bg-[#333333] ">
              <p className="">
                Scan QR Code to add to authenticator <br /> or use Daap Code
              </p>
              <img
                className="w-[200px] mx-auto bg-white "
                src="/qr.png"
                alt=""
              />

              <span className="p-1 mx-auto text-xl cursor-pointer text-yellow-400 flex flex-row items-center gap-1">
                0420 <FaCopy />
              </span>
            </div>
          </div>
        </div>
        {/* step 3 */}

        <p className=" mt-4 pl-[55px] mx-auto text-sm text-gray-300">
          Already have an account?{" "}
          <span
            className=" cursor-pointer underline text-blue-400 mx-1"
            onClick={() => setMode("login")}
          >
            Login
          </span>{" "}
          instead
        </p>
      </div>
    </>
  );
};

const LoginFlow = ({ mode, setMode, handleValidate }: any) => {
  const [otp, setOtp] = useState("");
  return (
    <>
      {" "}
      <p className="text-gray-300 font-semibold font-mono text-start w-full mt-3">
        Login using fluf.id
      </p>
      <div className="flex  flex-col w-full mx-2 my-5">
        <div className="w-full gap-4 flex flex-row">
          <div className="flex flex-col flex-grow">
            <div className="p-[10px] text-2xl  cursor-pointer rounded-full border-green-500 text-green-500 border-[2px]">
              <FaCheck />
            </div>
            <div className="w-[1px] h-full mx-auto flex-grow bg-[#464f5e]"></div>
          </div>
          <div className="h-full flex flex-col w-full gap-[10px] items-center">
            <h3 className="text-sm text-gray-300">
              Sign in with your desired wallet
            </h3>
            <span className="mb-[30px]">
              <ConnectKitButton />
            </span>
          </div>
        </div>
        {/* step2 */}
        <div className="w-full gap-4 flex flex-row">
          <div className="flex  flex-col flex-grow">
            <div className="p-[10px] text-2xl   cursor-pointer rounded-full border-[#464f5e] text-[#464f5e] border-[2px]">
              <TbAuth2Fa />
            </div>
            {/* <div className='w-[1px] h-full mx-auto flex-grow bg-[#464f5e]'></div> */}
          </div>
          <div className="h-full flex flex-col w-full gap-[10px] items-center">
            <h3 className="text-sm text-gray-300">
              Complete two factor authentication
            </h3>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={7}
              renderSeparator={<span className="mx-2">-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="p-2 text-3xl min-w-[52px] focus:ring-yellow-500 focus:border-yellow-500 rounded bg-[#333333] text-yellow-400"
                />
              )}
            />
            <button
              onClick={() => handleValidate()}
              className="bg-yellow-400 mt-3 mb-[25px] font-semibold hover:opacity-90 text-gray-600 border-b-[2px] border-r-[2px] rounded p-[5px] border-yellow-500"
            >
              Submit OTP
            </button>
          </div>
        </div>

        {/* step 3 */}

        <p className=" mt-4 mx-auto pl-[45px] text-sm text-gray-300">
          No account?{" "}
          <span
            className=" cursor-pointer underline text-blue-400 mx-1"
            onClick={() => setMode("signup")}
          >
            Sign up
          </span>{" "}
          instead
        </p>
      </div>
    </>
  );
};
