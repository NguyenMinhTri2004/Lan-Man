import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Button from '@/common/components/Button'
import Wrapper from '@/common/components/Wrapper'
import Notify from '@/common/components/Notify'
import Section , {SectionBody , SectionTitle} from '@/common/components/Section'
import Image from 'next/image'

const Home = () => {

  var settings = {
    customPaging: function() {
      return (
        <div className="w-[15px] h-[15px] rounded-full bg-[#fbcfbd] " ></div>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    spaceBetween : 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full " >
        <div className="md:bg-[url('/images/bg.svg')]  flex md:items-center  xs:justify-center md:justify-start bg-no-repeat xs:bg-[url('/images/bg_header_mobile.svg')]   bg-black-primary md:h-[40rem] xs:h-[28rem] xs:bg-bottom md:bg-right-bottom text-white " >
            <Wrapper>
                  <div className="flex flex-col md:items-start xs:items-center justify-center xs:h-[60%] md:h-full" >
                            <div className='text-[2.2rem] font-bold md:block xs:hidden' >
                                    <h1 className="" >TẾT <br></br>VÀ <span className="text-pink-primary" >MÙA XUÂN</span></h1>
                            </div>

                            <div >
                                    <Button>
                                    XEM HOA
                                    </Button>
                            </div>
                  </div> 


            </Wrapper>
        </div>

      <div className = "bg-[url('/images/bg_home.svg')] w-full md:bg-no-repeat md:bg-center md:bg-cover  " >
        <Section>
                      <SectionBody>
                          <Notify/>
                      </SectionBody>
         </Section>

         <Section>
              <SectionTitle>
                   Hướng dẫn đặt hoa
              </SectionTitle>

              <SectionBody>
                 
                      <div className = "w-full " >
                        <div className='flex items-center xs:flex-wrap lg:flex-nowrap gap-5 justify-between w-[90%] mt-20 mx-auto' >
                          <div className='flex items-start gap-2 ' >
                          <Image
                                src="/images/row.svg"
                                alt="Picture of the author"
                                width={18}
                                height={18}
                                className = "cursor-pointer mt-6"
                            />
                            <div className='flex md:flex-col xs:flex-row' >
                                <div>
                                  <p className="font-bold text-xl" >Bước 1: Xem hoa</p>
                                  <p className = "text-xl" >và chọn những mẫu Lan Hồ Điệp ưng ý</p>
                                </div>
                                  <Image
                                      src="/images/img-1.webp"
                                      alt="Picture of the author"
                                      width={241}
                                      height={128}
                                      className = "cursor-pointer mt-10 md:h-[128px] xs:h-[80px]"
                                  />

                            </div>
                              
                          </div>

                          <div className='flex items-start gap-2 ' >
                          <Image
                                src="/images/row.svg"
                                alt="Picture of the author"
                                width={18}
                                height={18}
                                className = "cursor-pointer mt-6"
                            />
                            <div className='flex md:flex-col  xs:flex-row-reverse  ' >
                                <div>
                                  <p className="font-bold text-xl" >Bước 1: Xem hoa</p>
                                  <p className = "text-xl" >và chọn những mẫu Lan Hồ Điệp ưng ý</p>
                                </div>
                                  <Image
                                      src="/images/img-1.webp"
                                      alt="Picture of the author"
                                      width={241}
                                      height={128}
                                      className = "cursor-pointer mt-10 md:h-[128px] xs:h-[80px]"
                                  />

                            </div>
                              
                          </div>

                          <div className='flex items-start gap-2 ' >
                          <Image
                                src="/images/row.svg"
                                alt="Picture of the author"
                                width={18}
                                height={18}
                                className = "cursor-pointer mt-6"
                            />
                            <div className='flex md:flex-col xs:flex-row' >
                                <div>
                                  <p className="font-bold text-xl" >Bước 1: Xem hoa</p>
                                  <p className = "text-xl" >và chọn những mẫu Lan Hồ Điệp ưng ý</p>
                                </div>
                                  <Image
                                      src="/images/img-1.webp"
                                      alt="Picture of the author"
                                      width={241}
                                      height={128}
                                      className = "cursor-pointer mt-10 md:h-[128px] xs:h-[80px]"
                                  />

                            </div>
                              
                          </div>

                          <div className='flex items-start gap-2 ' >
                          <Image
                                src="/images/row.svg"
                                alt="Picture of the author"
                                width={18}
                                height={18}
                                className = "cursor-pointer mt-6"
                            />
                            <div className='flex md:flex-col  xs:flex-row-reverse  ' >
                                <div>
                                  <p className="font-bold text-xl" >Bước 1: Xem hoa</p>
                                  <p className = "text-xl" >và chọn những mẫu Lan Hồ Điệp ưng ý</p>
                                </div>
                                  <Image
                                      src="/images/img-1.webp"
                                      alt="Picture of the author"
                                      width={241}
                                      height={128}
                                      className = "cursor-pointer mt-10 md:h-[128px] xs:h-[80px]"
                                  />

                            </div>
                              
                          </div>
                        </div>
                      </div>
                  
              </SectionBody>
         </Section>

         <Section>
               <SectionBody>
                    <Wrapper>
                         <div className="flex items-center lg:flex-row xs:flex-col justify-center gap-14 mt-20 px-5" >
                              
                                <Image
                                        src="/images/blog-1.svg"
                                        alt="Picture of the author"
                                        width={645}
                                        height={516}
                                        className = "cursor-pointer xs:h-full md:h-[516px] rounded-xl lg:w-[645px] xs:w-full object-cover mt-10 border-3 border-solid border-pink-primary  "
                                  />
                             

                              <div className="md:text-[1.5rem] xs:text-base font-bold" >
                                  <div className='flex items-center gap-5 ' >
                                      <Image
                                            src="/images/blog-3.svg"
                                            alt="Picture of the author"
                                            width={284}
                                            height={213}
                                            className = "cursor-pointer mt-10 rounded-xl object-cover  border-3 border-solid border-pink-primary"
                                      />
                                      <p className="" >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>

                                  <div className='flex items-center gap-5 ' >
                                      <Image
                                            src="/images/blog-2.svg"
                                            alt="Picture of the author"
                                            width={284}
                                            height={213}
                                            className = "cursor-pointer mt-10  rounded-xl object-cover  border-3 border-solid border-pink-primary"
                                      />
                                      <p className=""   >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>
                              </div>
                         </div>
                    </Wrapper>
               </SectionBody>
         </Section>

         <Section>
              <SectionTitle>
                     Được ưa chuộng
              </SectionTitle>

              <SectionBody>

              <Wrapper>
                  <Slider className='mt-20' {...settings}>
                          <div className="" >
                              <div className='rounded-xl object-cover w-full  border-5 overflow-hidden border-solid border-pink-primary' >
                                      <Image
                                              src="/images/c2.webp"
                                              alt="Picture of the author"
                                              width={376.68}
                                              height={376.68}
                                              className = "cursor-pointer object-contain"
                                        />

                                        <div className="flex items-center justify-between w-full bg-[#fbcfbd] " >
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
                          </div>
                          <div>
                              <div className='rounded-xl object-cover  border-5 overflow-hidden border-solid border-pink-primary' >
                                      <Image
                                              src="/images/c2.webp"
                                              alt="Picture of the author"
                                              width={376.68}
                                              height={376.68}
                                              className = "cursor-pointer object-contain"
                                        />

                                        <div className="flex items-center justify-between w-full bg-[#fbcfbd] " >
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
                          </div>
                          <div>
                              <div className='rounded-xl object-cover  border-5 overflow-hidden border-solid border-pink-primary' >
                                      <Image
                                              src="/images/c2.webp"
                                              alt="Picture of the author"
                                              width={376.68}
                                              height={376.68}
                                              className = "cursor-pointer object-contain"
                                        />

                                        <div className="flex items-center justify-between w-full bg-[#fbcfbd] " >
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
                          </div>
                          <div>
                              <div className='rounded-xl object-cover  border-5 overflow-hidden border-solid border-pink-primary' >
                                      <Image
                                              src="/images/c2.webp"
                                              alt="Picture of the author"
                                              width={376.68}
                                              height={376.68}
                                              className = "cursor-pointer object-contain"
                                        />

                                        <div className="flex items-center justify-between w-full bg-[#fbcfbd] " >
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
                          </div>
                          <div>
                              <div className='rounded-xl object-cover  border-5 overflow-hidden border-solid border-pink-primary' >
                                      <Image
                                              src="/images/c2.webp"
                                              alt="Picture of the author"
                                              width={376.68}
                                              height={376.68}
                                              className = "cursor-pointer object-contain"
                                        />

                                        <div className="flex items-center justify-between w-full bg-[#fbcfbd] " >
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
                          </div>
                          <div>
                              <div className='rounded-xl object-cover  border-5 overflow-hidden border-solid border-pink-primary' >
                                      <Image
                                              src="/images/c2.webp"
                                              alt="Picture of the author"
                                              width={376.68}
                                              height={376.68}
                                              className = "cursor-pointer object-contain"
                                        />

                                        <div className="flex items-center justify-between w-full bg-[#fbcfbd] " >
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
                          </div>
                        
                  </Slider>
              </Wrapper>
            
              </SectionBody>
         </Section>
      </div>  
    </div>
  )
}

export default Home