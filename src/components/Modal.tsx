import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// interface ModalProps {
//     children: React.ReactNode;
//     closeModal: () => void;
//     closeOnOutsideClick?: boolean; //optional
//     modalId?: string; //id of the div in index.html
// }
export const ModalPortal = ({
  children,
  closeModal,
  closeOnOutsideClick = true,
  modalId = "modal-portal",
}: any) => {
  const elRef = useRef<any>();
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  const handleOutsideClick = (e:any) => {
    //checks if click is on modal root or the children if it's on children closeModal won't run
    if (e.target === e.currentTarget) return closeModal();
  };

  useEffect(() => {
    const elRefCurrent = elRef.current;
    const modalRoot = document.getElementById(modalId);

    if (elRefCurrent && modalRoot) {
      modalRoot.appendChild(elRefCurrent);
    }
    window.history.pushState({ modalOpen: true }, "");

    if (closeOnOutsideClick) {
      const modalRoot = document.getElementById(modalId);
      modalRoot?.addEventListener("click", handleOutsideClick);
    }

    window.addEventListener("popstate", closeModal);

    return () => {
      if (elRefCurrent && modalRoot) {
        modalRoot.removeChild(elRefCurrent);
      }
      window.removeEventListener("popstate", closeModal);

      modalRoot?.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return <>{createPortal(children, elRef?.current)}</>;
};
