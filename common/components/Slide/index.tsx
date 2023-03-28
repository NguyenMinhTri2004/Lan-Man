import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Slide = () => {
  const slideList = [
    {
      image: "c2.webp",
      description: [
        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },
      ],
    },

    {
      image: "c2.webp",
      description: [
        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },
      ],
    },

    {
      image: "c2.webp",
      description: [
        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },
      ],
    },

    {
      image: "c2.webp",
      description: [
        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },
      ],
    },

    {
      image: "c2.webp",
      description: [
        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },

        {
          display: "Mini + cao",
        },
      ],
    },
  ];
  return (
    <div className="md:mx-5 second-title">
      <div>
        <Swiper
          className="mt-10 w-[85%]  h-[630px]"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={500}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            800: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {slideList?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="rounded-[2em] md:w-full  grid border-5 overflow-hidden border-solid border-pink-primary">
                  <Image
                    src={`/images/${item.image}`}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="cursor-pointer object-cover h-auto w-full"
                  />

                  <div className="flex items-center h-auto justify-between bg-[#fbcfbd] ">
                    <div className="pl-10">
                      {item.description.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-3 my-8"
                          >
                            <Image
                              src="/images/arrow_2.svg"
                              alt="Picture of the author"
                              width={18}
                              height={18}
                              className=""
                            />

                            <p className="font-bold">{item.display}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pr-10 flex flex-col items-center justify-center gap-6">
                      <Image
                        src="/images/fb.svg"
                        alt="Picture of the author"
                        width={75}
                        height={75}
                        className="cursor-pointer "
                      />

                      <p className="font-bold md:text-2xl xs:text-base">
                        Nhắn tin
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
