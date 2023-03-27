import React from "react";

const Modal = ({ open, setOpen, children }: any) => {
  return (
    <div
      className="fixed w-screen  h-screen backdrop-blur-xs bg-[#2228318d] grid justify-center content-center"
      onClick={() => setOpen(false)}
    >
      {children}
    </div>
  );
};

export default Modal;
