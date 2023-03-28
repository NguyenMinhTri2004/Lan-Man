import React from "react";
import Section, {
  SectionBody,
  SectionTitle,
} from "@/common/components/Section";
import Image from "next/image";
import Notify from "@/common/components/Notify";

const About = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/images/bg-about.png') pt-2">
      <div className=" bg-black-primary md:leading-[45px] bg-no-repeat bg-cover md:space-y-5 text-white">
        <Section>
          <SectionTitle color="white">
            <p className="text-white">Chúng tôi là ai?</p>
          </SectionTitle>

          <SectionBody>
            <ul className="md:text-4xl xs:text-base md:w-[78%] mx-auto md:mb-[60px] second-title xs:mb-5">
              <li className="md:mb-5 xs:md-2">
                Là đơn vị cung cấp công nghệ Tự động hóa & IoT cho các nhà kính
                Lan Hồ Điệp của các công ty lớn như Apollo, Lan Anh, Kim Phát,
                ...v.v.
              </li>
              <li className="md:mb-5 xs:mb-2">
                Có khả năng tiếp cận trực tiếp đến nguồn Lan uy tín, đảm bảo Lan
                chính gốc Đà Lạt và không thông qua bất kỳ thương nhân trung
                gian nào khác.
              </li>
              <li className="md:mb-5">
                Từ dịp Tết Nguyên Đán của mùa Xuân 2023, chúng tôi mở bán các
                sản phẩm trong bộ sưu tập Lan Hồ Điệp “Tết và Mùa Xuân”, mang sự
                sung túc đến với quý khách hàng.
              </li>
            </ul>
          </SectionBody>
        </Section>
      </div>

      <div className="bg-no-repeat bg-contain 2xl:bg-cover bg-[url('/images/bg-about.png')">
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
                <span className="font-bold main-title">Chư Sê, Pleiku và Kon Tum</span>
              </div>
            </Notify>
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>Nguồn Lan & Công nghệ</SectionTitle>
          <SectionBody>
            <div className="md:text-3xl md:px-10 xs:text-base mt-10 second-title md:leading-[45px] text-justify">
              <p className="md:px-10 xs:px-0">
                Dưới đây là một số hình ảnh được ghi lại trực tiếp tại các nhà
                kính Lan Hồ Điệp hiện đại, với chủ nhà kính là đối tác với chúng
                tôi về mặt công nghệ Tự động hóa và IoT.
              </p>

              <div className="md:grid md:mt-20 mt-10 w-full h-fit md:justify-items-center mb-20">
                <video
                  className="border-3 md:h-[calc(100vh_-_3em)] border-solid border-[#8D9091] rounded-[0.5em] md:w-auto w-full  h-auto mx-auto "
                  preload="metadata"
                  autoPlay
                  muted
                  loop
                  src="/videos/video1.mp4"
                ></video>
                <p className="text-center">
                  GIF: Công nghệ Tự động hóa tích hợp IoT của iMAI chúng tôi,
                  hiện đang áp dụng cho các nhà kính Lan tại Lâm Đồng, Phan
                  Rang, Đồng Nai,...
                </p>
              </div>

              <div>
                <Image
                  src="/images/img-2.webp"
                  alt="Picture of the author"
                  width={965}
                  height={543}
                  className="flex w-full h-fit md:h-screen md:w-fit mx-auto border-3 border-solid border-[#8D9091] rounded-[0.5em]  "
                />

                <p className="text-center">
                  Kỹ sư đang lập trình cho hệ thống nhà kính
                </p>
              </div>

              <div className="md:grid w-full h-fit md:justify-items-center md:mt-20 mt-10 ">
                <Image
                  src="/images/img-3.webp"
                  alt="Picture of the author"
                  width={700}
                  height={933}
                  className="w-full h-fit mx-auto md:h-screen md:w-fit border-3 border-solid border-[#8D9091] rounded-[0.5em]"
                />

                <p className="text-center">Tủ Tự động hóa tích hợp IoT</p>
              </div>

              <div className="md:grid w-full h-fit md:justify-items-center md:mt-20 mt-10 ">
                <Image
                  src="/images/img-4.webp"
                  alt="Picture of the author"
                  width={1286}
                  height={797}
                  className="flex w-full h-fit md:h-screen md:w-fit mx-auto"
                />

                <p className="text-center">Ứng dụng điều khiển từ xa</p>
              </div>

              <div className="md:grid md:my-15 my-10 w-full h-fit md:justify-items-center">
                <Image
                  src="/images/img-5.webp"
                  alt="Picture of the author"
                  width={1121}
                  height={670}
                  className="md:flex w-full h-fit md:h-screen md:w-fit mx-auto border-3 border-solid border-[#8D9091] rounded-[0.5em]"
                />

                <p className="text-center">
                  Lan Đà Lạt được chụp trực tiếp tại vườn
                </p>
              </div>

              <div className="text-4xl md:px-10 xs:px-0">
                <p>
                  Nhờ việc áp dụng công nghệ, kỹ thuật vào việc chăm sóc Lan Hồ
                  Điệp, đặc biệt là đảm bảo điều kiện nhiệt độ - độ ẩm - ánh
                  sáng hằng ngày nên chất lượng hoa từ các nhà kính của chúng
                  tôi được đảm bảo. Hoa nhiều và nở to, màu sắc đẹp, lá xanh to,
                  phiến lá dày, bộ rễ hoa khoẻ. Thời gian hoa trưng từ hai đến
                  ba tháng. Sau khi hoa tàn, nếu bạn tiếp tục chăm sóc đúng
                  cách, cây sẽ tiếp tục cho ra hoa thêm nhiều năm.
                </p>

                <br></br>

                <p>
                  Trên đây là nền tảng công nghệ và nguồn gốc Lan Hồ Điệp của
                  chúng tôi, là cơ sở để quý khách hàng có thể an tâm lựa chọn,
                  tránh trường hợp không may mua phải Lan Hồ Điệp Trung Quốc
                  (chi tiết về việc này có thể đọc{" "}
                  <span className="text-blue-500 cursor-pointer underline underline-offset-1">
                    tại đây
                  </span>
                  ).
                </p>

                <br></br>

                <p>Chúc quý khách hàng có một năm mới An khang Thịnh vượng.</p>
              </div>
            </div>
          </SectionBody>
        </Section>
      </div>
    </div>
  );
};

export default About;
