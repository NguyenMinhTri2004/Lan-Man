import React from "react";
import Section, {
  SectionBody,
  SectionTitle,
} from "@/common/components/Section";
import Image from "next/image";
import Wrapper from "@/common/components/Wrapper";
import Notify from "@/common/components/Notify";
import Slide from "@/common/components/Slide";

const Flowers = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/images/bg-about.png')]  ">
      <div className="bg-black-primary">
        <Section>
          <SectionTitle color="white">
            <p className="text-white">Được ưa chuộng</p>
          </SectionTitle>

          <SectionBody>
            <Slide />
          </SectionBody>
        </Section>
      </div>

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
        <SectionTitle color="black">
          <p className="text-black">Chậu mini</p>
        </SectionTitle>

        <SectionBody>
          <Slide />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle color="black">
          <p className="text-black">Chậu 5 cành</p>
        </SectionTitle>

        <SectionBody>
          <Slide />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle color="black">
          <p className="text-black">Chậu 9 cành</p>
        </SectionTitle>

        <SectionBody>
          <Slide />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle color="black">
          <p className="text-black">Đặt chậu lớn hơn</p>
        </SectionTitle>

        <SectionBody>
          <Notify>
            <div className="md:flex md:items-center">
              <Image
                src="/images/tree.svg"
                alt="Picture of the author"
                width={50}
                height={50}
                className="hidden md:block"
              />

              <div className=" md:ml-5">
                <span className="font-bold">
                  Chúng tôi có nhận đặt hàng những chậu hoa Lan Hồ Điệp lớn hơn
                  (13, 17, 21, 25 cành ...v.v.) cho nhu cầu của các gia đình lớn
                  và các doanh nghiệp. Vui lòng liên hệ để chúng tôi mang đến
                  những tư vấn phù hợp nhất.
                </span>
              </div>
            </div>
          </Notify>
        </SectionBody>
      </Section>
    </div>
  );
};

export default Flowers;
