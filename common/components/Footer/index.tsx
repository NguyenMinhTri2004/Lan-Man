import React from "react";
import Image from "next/image";
import Button from "../Button";

const Footer = () => {
  const locationList = [
    {
      display: "856 Hùng Vương, TT. Chư Sê, h. Chư Sê, Gia Lai",
    },

    {
      display: "856 Hùng Vương, TT. Chư Sê, h. Chư Sê, Gia Lai",
    },

    {
      display: "856 Hùng Vương, TT. Chư Sê, h. Chư Sê, Gia Lai",
    },
  ];

  const Page = [
    {
      display: "TRANG CHỦ",
    },

    {
      display: "TRANG CHỦ",
    },

    {
      display: "TRANG CHỦ",
    },

    {
      display: "TRANG CHỦ",
    },

    {
      display: "TRANG CHỦ",
    },
  ];
  return (
    <div className="overflow-hidden mt-5">
      <div className="">
        <div className="flex main-title xs:flex-col xs:text-[9px] md:text-base md:flex-row items-center md:gap-5 xs:gap-0 justify-center mb-20 text-center">
          <div className="flex items-center gap-5">
            <h1>Vào</h1>
            <Button>XEM HOA</Button>
          </div>
          <h1 className="leading-[40px]">
            {" "}
            để xem toàn bộ mẫu hoa của Lan Man{" "}
          </h1>
        </div>

        <div className="bg-[url('/images/footer_bg1.svg')] bg-no-repeat  main-title h-fit flex items-center justify-between xs:px-5 md:px-16 bg-left-bottom bg-contain">
          <div className="w-[52%] font-bold  md:text-7xl xs:text-2xl md:leading-[94px] leading-[35px]">
            Đã đến lúc
            <br></br>
            mang mùa Xuân
            <br></br>
            về với gia đình
          </div>

          <div className="w-[40%] flex justify-end">
            <Image
              src="/images/phone.svg"
              alt="Picture of the author"
              width={429}
              height={766}
              className="cursor-pointer xs:w-full xs:h-full lg:w-[429px]"
            />
          </div>
        </div>

        <div className="md:bg-[url('/images/bg_footer2.png')] second-title bg-[url('/images/bg-footer-mobile.png')] bg-no-repeat bg-center md:bg-top-center h-full text-white bg-cover pt-24 p-10 md:p-16 md:pt-60">
          <div className="backdrop-blur-lg h-full bg-[#c4c4c428] grid md:px-36 px-10 md:py-16 md:-pt-20 md:-mt-20 py-10 rounded-[20px]">
            <div className="w-full flex items-center justify-center mb-2">
              <Image
                src="/images/logo.svg"
                alt="Picture of the author"
                width={262}
                height={60}
                className="md:block xs:hidden"
              />

              <Image
                src="/images/logo-footer.svg"
                alt="Picture of the author"
                width={76}
                height={76}
                className="md:hidden xs:block"
              />
            </div>

            <div className="flex md:text-2xl xs:text-sm md:flex-row xs:flex-col h-fit md:items-center xs:items-start justify-between">
              <ul className="md:block xs:hidden">
                {locationList.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2 my-16">
                      <Image
                        src="/images/location.svg"
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        className=""
                      />

                      <p className="cursor-pointer hover:text-pink-primary">
                        {item.display}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <ul className="md:mt-10 ">
                {Page.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2 mb-4">
                      <Image
                        src="/images/arrow.svg"
                        alt="Picture of the author"
                        width={30}
                        height={25}
                        className=""
                      />

                      <p className="cursor-pointer hover:text-pink-primary">
                        {item.display}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
