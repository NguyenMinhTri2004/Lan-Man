import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@/common/components/Button";
import Wrapper from "@/common/components/Wrapper";
import Notify from "@/common/components/Notify";
import Section, {
  SectionBody,
  SectionTitle,
} from "@/common/components/Section";
import Image from "next/image";
import Slide from "@/common/components/Slide";
import Blogs from "@/common/components/Blogs";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="h-full">
      <div className="md:bg-[url('/images/bg.svg')]  flex md:items-center h-96 md:h-[calc(100vh_-_4rem)] xs:justify-center md:justify-start bg-no-repeat xs:bg-[url('/images/bg_header_mobile.svg')]   bg-black-primary xs:bg-bottom md:bg-right-bottom text-white ">
        <Wrapper>
          <div className="flex flex-col md:items-start xs:items-center justify-center xs:h-[30%] md:h-full">
            <div
              data-aos="fade-right"
              className="text-[2.2rem] font-bold md:block xs:hidden md:leading-[92px] md:w-1/2"
            >
              <h1 className="">
                TẾT <br></br>VÀ{" "}
                <span className="text-pink-primary">MÙA XUÂN</span>
              </h1>
            </div>

            <div data-aos="fade-left">
              <Button>XEM HOA</Button>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="bg-[url('/images/bg_home.svg')] w-full md:bg-no-repeat md:bg-center md:bg-cover  ">
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

                <div className="md:ml-5">
                  <span className="font-bold mr-2 ">Thông báo:</span>
                  <span className="font-bold ">Lan đã nở !</span>
                </div>
              </div>

              <div className="md:ml-[200px]">
                Chúng tôi đã bắt đầu nhận đơn đặt hàng tại{" "}
                <span className="font-bold">Chư Sê, Pleiku và Kon Tum</span>
              </div>
            </Notify>
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>Hướng dẫn đặt hoa</SectionTitle>

          <SectionBody>
            <div data-aos="fade-up">
              <div className="md:px-28 px-6 gap-5 mt-10 md:grid md:grid-cols-4 md:gap-x-[40px] ">
                <div className="text-[21px] flex md:flex-col gap-2 xs:flex-row items-center">
                  <div className="w-full">
                    <div className="flex gap-3 items-center mb-3">
                      <Image
                        src="/images/row.svg"
                        alt="Picture of the author"
                        width={18}
                        height={18}
                        className="cursor-pointer"
                      />

                      <p className="font-bold text-xl">Bước 1: Xem hoa</p>
                    </div>
                    <p className="text-xl md:ml-7 ml-6 font-thin mb-7 md:leading-[32px]">
                      và chọn những mẫu Lan Hồ Điệp ưng ý
                    </p>
                  </div>
                  <div className="w-full ">
                    <Image
                      src="/images/img-1.webp"
                      alt="Picture of the author"
                      width={150}
                      height={150}
                      className="md:h-32 h-full md:w-auto md:mt-10 md:flex md:mx-auto md:my-auto"
                    />
                  </div>
                </div>

                <div className="text-[21px] flex md:flex-col gap-2 xs:flex-row-reverse items-center">
                  <div className="w-full">
                    <div className="flex gap-3 items-center mb-3">
                      <Image
                        src="/images/row.svg"
                        alt="Picture of the author"
                        width={18}
                        height={18}
                        className="cursor-pointer"
                      />

                      <p className="font-bold text-xl">Bước 1: Xem hoa</p>
                    </div>
                    <p className="text-xl md:ml-7 ml-6 font-thin mb-7 md:leading-[32px] ">
                      và chọn những mẫu Lan Hồ Điệp ưng ý
                    </p>
                  </div>
                  <div className="w-full ">
                    <Image
                      src="/images/img-1.webp"
                      alt="Picture of the author"
                      width={150}
                      height={150}
                      className="md:h-32 h-full md:w-auto md:mt-10 md:flex md:mx-auto md:my-auto"
                    />
                  </div>
                </div>

                <div className="text-[21px] flex md:flex-col xs:flex-row gap-2 items-center">
                  <div className="w-full">
                    <div className="flex gap-3 items-center mb-3">
                      <Image
                        src="/images/row.svg"
                        alt="Picture of the author"
                        width={18}
                        height={18}
                        className="cursor-pointer"
                      />

                      <p className="font-bold text-xl">Bước 1: Xem hoa</p>
                    </div>
                    <p className="text-xl md:ml-7 ml-6 font-thin mb-7 md:leading-[32px]">
                      và chọn những mẫu Lan Hồ Điệp ưng ý
                    </p>
                  </div>
                  <div className="w-full">
                    <Image
                      src="/images/img-1.webp"
                      alt="Picture of the author"
                      width={150}
                      height={150}
                      className="md:h-32 h-full md:w-auto md:mt-10 md:flex md:mx-auto md:my-auto"
                    />
                  </div>
                </div>

                <div className="text-[21px] flex md:flex-col xs:flex-row-reverse gap-2 items-center">
                  <div className="w-full">
                    <div className="flex gap-3 items-center mb-3">
                      <Image
                        src="/images/row.svg"
                        alt="Picture of the author"
                        width={18}
                        height={18}
                        className="cursor-pointer"
                      />

                      <p className="font-bold text-xl">Bước 1: Xem hoa</p>
                    </div>
                    <p className="text-xl md:ml-7 ml-6 font-thin mb-7 md:leading-[32px]">
                      và chọn những mẫu Lan Hồ Điệp ưng ý
                    </p>
                  </div>
                  <div className="w-full">
                    <Image
                      src="/images/img-1.webp"
                      alt="Picture of the author"
                      width={150}
                      height={150}
                      className="md:h-32 h-full md:w-auto md:mt-10 md:flex md:mx-auto md:my-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionBody>
        </Section>

        <Section>
          <SectionBody>
            <Blogs />
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>Được ưa chuộng</SectionTitle>

          <SectionBody>
            <Slide />
          </SectionBody>
        </Section>
      </div>
    </div>
  );
};

export default Home;
