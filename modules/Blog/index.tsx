import React from "react";
import Section, {
  SectionBody,
  SectionTitle,
} from "@/common/components/Section";
import Image from "next/image";
import Notify from "@/common/components/Notify";
import Blogs from "@/common/components/Blogs";

const Blog = () => {
  const blogList = [
    {
      image: "blog-3.svg",
      display: "Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp",
    },

    {
      image: "blog-2.svg",
      display: "Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp",
    },

    {
      image: "blog-1.svg",
      display: "Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp",
    },
  ];
  return (
    <div className="bg-no-repeat bg-cover pt-2 bg-[url('/images/bg-about.png')]">
      <div className="bg-[#222831fe]  text-white">
        <Section>
          <SectionTitle color="white">
            <p className="text-white"> Mọi người quan tâm</p>
          </SectionTitle>

          <SectionBody>
            <Blogs />
          </SectionBody>
        </Section>
      </div>

      <div className="md:bg-none xs:bg-[url('/images/bg-about.png')] bg-no-repeat bg-cover ">
        <Section>
          <SectionBody>
            <Notify>
              <div className="md:flex md:items-center ">
                <Image
                  src="/images/tree.svg"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                  className="cursor-pointer md:block xs:hidden"
                />

                <div className="md:ml-5 main-title">
                  <span className="font-bold mr-2 ">Thông báo:</span>
                  <span className="font-bold ">Lan đã nở !</span>
                </div>
              </div>

              <div className="md:ml-[200px] second-title">
                Chúng tôi đã bắt đầu nhận đơn đặt hàng tại{" "}
                <span className="font-bold main-title">
                  Chư Sê, Pleiku và Kon Tum
                </span>
              </div>
            </Notify>
          </SectionBody>
        </Section>

        <Section>
          <SectionBody>
            <div className=" flex items-center flex-wrap text-base md:gap-20 xs:gap-10 font-bold md:px-14 xs:px-0">
              {blogList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-5 md:w-[45%] main-title  xs:w-full"
                  >
                    <Image
                      src={`/images/${item.image}`}
                      alt="Picture of the author"
                      width={284}
                      height={213}
                      className="cursor-pointer  rounded-xl  h-auto md:w-auto w-1/2 border-3 border-solid border-pink-primary"
                    />
                    <p className=" leading-[30px] ">{item.display}</p>
                  </div>
                );
              })}
            </div>
          </SectionBody>
        </Section>
      </div>
    </div>
  );
};

export default Blog;
