import React from "react";
import Image from "next/image";

const Notify = ({ children }: any) => {
  return (
    <div className="md:mx-40 bg-[#FBCFBD]  md:mb-12 md:text-[24px] text-[21px] md:mt-10 leading-[32px] md:leading-[36px] md:py-3 md:px-20 my-4  py-3 px-5 border-pink-primary border-[3px] border-solid rounded-[17px]">
      {children}
    </div>
  );
};

export default Notify;
