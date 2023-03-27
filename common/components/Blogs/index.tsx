import React from "react";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className="flex items-center lg:flex-row xs:flex-col justify-center mt-5 md:gap-12 xs:gap-0 md:px-14 xs:px-0">
      <div className="h-fit">
        <Image
          src="/images/blog-1.svg"
          alt="Picture of the author"
          width={566}
          height={516}
          className="cursor-pointer xs:h-full md:h-[516px] rounded-xl md:w-[566px]  xs:w-full object-cover  border-3 border-solid border-pink-primary  "
        />
        <div className=" mx-auto md:translate-y-[-120px] w-[75%] xs:translate-y-[-70px] md:text-[1.4rem] xs:text-[1rem] text-white md:px-17 px-5 self-center md:leading-[32px] font-bold cursor-pointer hover:text-pink-primary">
          Những lưu ý để mua Lan Hồ Điệp chính hãng từ Đà Lạt, tránh mua phải
          Lan giả
        </div>
      </div>

      <div className="md:text-[1.5rem] xs:text-base flex flex-col font-bold md:mb-16 xs:mb-0 gap-10 ">
        <div className="flex items-center gap-5">
          <Image
            src="/images/blog-3.svg"
            alt="Picture of the author"
            width={284}
            height={213}
            className="cursor-pointer  rounded-xl  h-auto md:w-auto w-1/2 border-3 border-solid border-pink-primary"
          />
          <div className="md:leading-[32px] ">
            Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp
          </div>
        </div>

        <div className="flex items-center gap-5 ">
          <Image
            src="/images/blog-2.svg"
            alt="Picture of the author"
            width={284}
            height={213}
            className="cursor-pointer  h-auto md:w-auto w-1/2  rounded-xl border-3 border-solid border-pink-primary"
          />
          <div className="md:leading-[32px] ">
            Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
