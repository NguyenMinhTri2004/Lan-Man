import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'

const Slide = () => {
  return (
    <Swiper 
    className='mt-10 w-[85%] h-[630px] mx-auto'
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={50}
    slidesPerView={3}
    pagination={
      { 
        el: '.swiper-pagination',
        clickable: true ,
        // renderBullet: function (index, className) {
        //   return ReactDOMServer.renderToStaticMarkup(<span className='w-20 h-20 bg-red-400 rounded-full' >2</span>);
        // },
      }
    }

          autoplay= { {
            delay: 500,
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
     <SwiperSlide>                  
                <div className='rounded-[2em] border-5 overflow-hidden border-solid border-pink-primary' >
                     <div className='h-[376.68px]' >
                        <Image
                                src="/images/c2.webp"
                                alt="Picture of the author"
                                width={376.68}
                                height={376.68}
                                className = "cursor-pointer object-cover w-full"
                        />
                     </div>

                          <div className="flex items-center h-auto justify-between bg-[#fbcfbd] " >
                            <div className="pl-10" >
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                            </div>

                            <div  className="pr-10"  >
                                <Image
                                    src="/images/fb.svg"
                                    alt="Picture of the author"
                                    width={75}
                                    height={75}
                                    className = "cursor-pointer "
                                  />

                                  <p>Nhắn tin</p>
                            </div>
                          </div>
                </div>               
     </SwiperSlide>

     <SwiperSlide>                  
                <div className='rounded-[2em] border-5 overflow-hidden border-solid border-pink-primary' >
                     <div className='h-[376.68px]' >
                        <Image
                                src="/images/c2.webp"
                                alt="Picture of the author"
                                width={376.68}
                                height={376.68}
                                className = "cursor-pointer object-cover w-full"
                        />
                     </div>

                          <div className="flex items-center h-auto justify-between bg-[#fbcfbd] " >
                            <div className="pl-10" >
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                            </div>

                            <div  className="pr-10"  >
                                <Image
                                    src="/images/fb.svg"
                                    alt="Picture of the author"
                                    width={75}
                                    height={75}
                                    className = "cursor-pointer "
                                  />

                                  <p>Nhắn tin</p>
                            </div>
                          </div>
                </div>               
     </SwiperSlide>
   
     <SwiperSlide>                  
                <div className='rounded-[2em] border-5 overflow-hidden border-solid border-pink-primary' >
                     <div className='h-[376.68px]' >
                        <Image
                                src="/images/c2.webp"
                                alt="Picture of the author"
                                width={376.68}
                                height={376.68}
                                className = "cursor-pointer object-cover w-full"
                        />
                     </div>

                          <div className="flex items-center h-auto justify-between bg-[#fbcfbd] " >
                            <div className="pl-10" >
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                            </div>

                            <div  className="pr-10"  >
                                <Image
                                    src="/images/fb.svg"
                                    alt="Picture of the author"
                                    width={75}
                                    height={75}
                                    className = "cursor-pointer "
                                  />

                                  <p>Nhắn tin</p>
                            </div>
                          </div>
                </div>               
     </SwiperSlide>

     <SwiperSlide>                  
                <div className='rounded-[2em] border-5 overflow-hidden border-solid border-pink-primary' >
                     <div className='h-[376.68px]' >
                        <Image
                                src="/images/c2.webp"
                                alt="Picture of the author"
                                width={376.68}
                                height={376.68}
                                className = "cursor-pointer object-cover w-full"
                        />
                     </div>

                          <div className="flex items-center h-auto justify-between bg-[#fbcfbd] " >
                            <div className="pl-10" >
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                            </div>

                            <div  className="pr-10"  >
                                <Image
                                    src="/images/fb.svg"
                                    alt="Picture of the author"
                                    width={75}
                                    height={75}
                                    className = "cursor-pointer "
                                  />

                                  <p>Nhắn tin</p>
                            </div>
                          </div>
                </div>               
     </SwiperSlide>

     <SwiperSlide>                  
                <div className='rounded-[2em] border-5 overflow-hidden border-solid border-pink-primary' >
                     <div className='h-[376.68px]' >
                        <Image
                                src="/images/c2.webp"
                                alt="Picture of the author"
                                width={376.68}
                                height={376.68}
                                className = "cursor-pointer object-cover w-full"
                        />
                     </div>

                          <div className="flex items-center h-auto justify-between bg-[#fbcfbd] " >
                            <div className="pl-10" >
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                            </div>

                            <div  className="pr-10"  >
                                <Image
                                    src="/images/fb.svg"
                                    alt="Picture of the author"
                                    width={75}
                                    height={75}
                                    className = "cursor-pointer "
                                  />

                                  <p>Nhắn tin</p>
                            </div>
                          </div>
                </div>               
     </SwiperSlide>

     <SwiperSlide>                  
                <div className='rounded-[2em] border-5 overflow-hidden border-solid border-pink-primary' >
                     <div className='h-[376.68px]' >
                        <Image
                                src="/images/c2.webp"
                                alt="Picture of the author"
                                width={376.68}
                                height={376.68}
                                className = "cursor-pointer object-cover w-full"
                        />
                     </div>

                          <div className="flex items-center h-auto justify-between bg-[#fbcfbd] " >
                            <div className="pl-10" >
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                            </div>

                            <div  className="pr-10"  >
                                <Image
                                    src="/images/fb.svg"
                                    alt="Picture of the author"
                                    width={75}
                                    height={75}
                                    className = "cursor-pointer "
                                  />

                                  <p>Nhắn tin</p>
                            </div>
                          </div>
                </div>               
     </SwiperSlide>

     <SwiperSlide>                  
                <div className='rounded-[2em] border-5 overflow-hidden border-solid border-pink-primary' >
                     <div className='h-[376.68px]' >
                        <Image
                                src="/images/c2.webp"
                                alt="Picture of the author"
                                width={376.68}
                                height={376.68}
                                className = "cursor-pointer object-cover w-full"
                        />
                     </div>

                          <div className="flex items-center h-auto justify-between bg-[#fbcfbd] " >
                            <div className="pl-10" >
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                            </div>

                            <div  className="pr-10"  >
                                <Image
                                    src="/images/fb.svg"
                                    alt="Picture of the author"
                                    width={75}
                                    height={75}
                                    className = "cursor-pointer "
                                  />

                                  <p>Nhắn tin</p>
                            </div>
                          </div>
                </div>               
     </SwiperSlide>

     <SwiperSlide>                  
                <div className='rounded-[2em] border-5 overflow-hidden border-solid border-pink-primary' >
                     <div className='h-[376.68px]' >
                        <Image
                                src="/images/c2.webp"
                                alt="Picture of the author"
                                width={376.68}
                                height={376.68}
                                className = "cursor-pointer object-cover w-full"
                        />
                     </div>

                          <div className="flex items-center h-auto justify-between bg-[#fbcfbd] " >
                            <div className="pl-10" >
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                            </div>

                            <div  className="pr-10"  >
                                <Image
                                    src="/images/fb.svg"
                                    alt="Picture of the author"
                                    width={75}
                                    height={75}
                                    className = "cursor-pointer "
                                  />

                                  <p>Nhắn tin</p>
                            </div>
                          </div>
                </div>               
     </SwiperSlide>

     <SwiperSlide>                  
                <div className='rounded-[2em] border-5 overflow-hidden border-solid border-pink-primary' >
                     <div className='h-[376.68px]' >
                        <Image
                                src="/images/c2.webp"
                                alt="Picture of the author"
                                width={376.68}
                                height={376.68}
                                className = "cursor-pointer object-cover w-full"
                        />
                     </div>

                          <div className="flex items-center h-auto justify-between bg-[#fbcfbd] " >
                            <div className="pl-10" >
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                                <div className="flex items-center gap-2" >
                                          <Image
                                              src="/images/arrow_2.svg"
                                              alt="Picture of the author"
                                              width={18}
                                              height={18}
                                              className = ""
                                            />

                                            <p className="font-bold" >Mini + cao</p>
                                </div>
                            </div>

                            <div  className="pr-10"  >
                                <Image
                                    src="/images/fb.svg"
                                    alt="Picture of the author"
                                    width={75}
                                    height={75}
                                    className = "cursor-pointer "
                                  />

                                  <p>Nhắn tin</p>
                            </div>
                          </div>
                </div>               
     </SwiperSlide>
     <div className="swiper-pagination"></div>

   </Swiper>
  )
}

export default Slide