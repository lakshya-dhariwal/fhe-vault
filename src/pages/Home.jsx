import React from 'react';
import { FaCheck } from 'react-icons/fa';
import CustomLink from '@/components/CustomLink';
import 'cal-sans';
import { ModalPortal } from '@/components/Modal';
import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { TbAuth2Fa } from 'react-icons/tb';
import OtpInput from 'react-otp-input';

export default function Home() {
  const [onboarding, setOnboarding] = useState('false');
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <div className='max-w-[650px] text-center rounded flex-col flex items-center gap-5 p-5'>
              <h1 style={{ fontFamily: 'Cal Sans' }}> 🏛️ FHE Vault</h1>
              <h2
                className='text-gray-300 text-[25px] '
                style={{ fontFamily: 'Cal Sans' }}
              >
                Enable Multi Factor authentication and secure your files. Store
                and own your data.
              </h2>
              <button
                onClick={() => setOnboarding('true')}
                className='bg-yellow-400 font-semibold hover:opacity-90 text-gray-600 border-b-[2px] border-r-[2px] rounded p-[5px] border-yellow-500'
              >
                Get Started
              </button>
            </div>

            <footer className='absolute text-gray-300 font-mono bottom-2'>
              powered by{' '}
              <CustomLink href='https://fluf-id.vercel.app'>fluf.id</CustomLink>
            </footer>
          </div>
        </section>
        <OnboardingModal
          onboarding={onboarding}
          setOnboarding={setOnboarding}
        />
      </main>
    </>
  );
}

const OnboardingModal = ({ onboarding, setOnboarding }) => {
  const [mode, setMode] = useState('login');
  const [otp, setOtp] = useState('');
  return (
    <>
      {onboarding && (
        <ModalPortal closeModal={() => setOnboarding(false)}>
          <div className=' bg-[#0a0a0a]  relative text-[#d4d4d4] border-gray-800 rounded-lg  gap-2 p-8 px-[110px] border flex flex-col items-center'>
            <div className='absolute top-5 right-5 p-[2px] cursor-pointer rounded-full border-gray-100 border-[1px] '>
              {' '}
              <IoClose className='' onClick={() => setOnboarding(false)} />
            </div>
            <h1
              style={{ fontFamily: 'Cal Sans' }}
              className='text-[25px] text-yellow-500 p-[10px]'
            >
              {' '}
              🏛️ FHE Vault
            </h1>

            {mode === 'login' && <LoginFlow mode={mode} setMode={setMode} />}
            {mode === 'signup' && <SignUpFlow mode={mode} setMode={setMode} />}
          </div>
        </ModalPortal>
      )}
    </>
  );
};

const SignUpFlow = ({ mode, setMode }) => {
  return <></>;
};

const LoginFlow = ({ mode, setMode }) => {
  return (
    <>
      {' '}
      <p className='text-gray-300 font-semibold font-mono text-start w-full mt-3'>
        Login using fluf.id
      </p>
      <div className='flex  flex-col w-full mx-2 my-5'>
        <div className='w-full gap-4 flex flex-row'>
          <div className='flex flex-col flex-grow'>
            <div className='p-[10px] text-2xl  cursor-pointer rounded-full border-green-500 text-green-500 border-[2px]'>
              <FaCheck />
            </div>
            <div className='w-[1px] h-full mx-auto flex-grow bg-[#464f5e]'></div>
          </div>
          <div className='h-full flex flex-col w-full gap-[10px] items-center'>
            <h3 className='text-sm text-gray-300'>
              Sign in with your desired wallet
            </h3>
            <button className='bg-yellow-400 mb-[25px] font-semibold hover:opacity-90 text-gray-600 border-b-[2px] border-r-[2px] rounded p-[5px] border-yellow-500'>
              Connect Wallet
            </button>
          </div>
        </div>
        {/* step2 */}
        <div className='w-full gap-4 flex flex-row'>
          <div className='flex  flex-col flex-grow'>
            <div className='p-[10px] text-2xl   cursor-pointer rounded-full border-[#464f5e] text-[#464f5e] border-[2px]'>
              <TbAuth2Fa />
            </div>
            {/* <div className='w-[1px] h-full mx-auto flex-grow bg-[#464f5e]'></div> */}
          </div>
          <div className='h-full flex flex-col w-full gap-[10px] items-center'>
            <h3 className='text-sm text-gray-300'>
              Complete two factor authentication
            </h3>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className='mx-2'>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className='p-2 text-3xl min-w-[52px] rounded bg-[#333333] text-yellow-400'
                />
              )}
            />
            <button className='bg-yellow-400 mt-3 mb-[25px] font-semibold hover:opacity-90 text-gray-600 border-b-[2px] border-r-[2px] rounded p-[5px] border-yellow-500'>
              Submit OTP
            </button>
          </div>
        </div>

        {/* step 3 */}

        <p className=' mt-4 mx-auto'>
          No account?{' '}
          <span
            className=' cursor-pointer underline text-blue-400 mx-1'
            onClick={() => setMode('signup')}
          >
            sign up
          </span>{' '}
          instead
        </p>
      </div>
    </>
  );
};
