import React from "react";
import Image from "next/image";

export const SectionBody = ({ children }: any) => {
  return <div className="md:px-5 xs:px-3 py-2 ">{children}</div>;
};

export const SectionTitle = ({ children, color }: any) => {
  return (
    <div className="flex my-5 main-title">
      {color == "white" ? (
        <Image
          src="/images/right-arrow-white.svg"
          alt="Picture of the author"
          width={648}
          height={57}
          className="w-1/4 grid  self-center h-fit  md:ml-0 "
        />
      ) : (
        <Image
          src="/images/line-left.svg"
          alt="Picture of the author"
          width={648}
          height={57}
          className="w-1/4 grid  self-center h-fit  md:ml-0 "
        />
      )}

      <div className="font-bold lg:text-[3.2rem] mx-auto leading-[33px] md:leading-[90px] md:text-[2rem] xs:text-2xl text-center">
        {children}
      </div>

      {color == "white" ? (
        <Image
          src="/images/left-arrow-white.svg"
          alt="Picture of the author"
          width={648}
          height={57}
          className="self-center grid w-1/4 h-fit  md:mr-0"
        />
      ) : (
        <Image
          src="/images/line-right.svg"
          alt="Picture of the author"
          width={648}
          height={57}
          className="self-center grid w-1/4 h-fit  md:mr-0  "
        />
      )}
    </div>
  );
};

const Section = ({ children }: any) => {
  return <div className="py-2  w-full">{children}</div>;
};

export default Section;
