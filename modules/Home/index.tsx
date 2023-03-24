import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Button from '@/common/components/Button'
import Wrapper from '@/common/components/Wrapper'
import Notify from '@/common/components/Notify'
import Section , {SectionBody , SectionTitle} from '@/common/components/Section'
import Image from 'next/image'
import Slide from '@/common/components/Slide'

const Home = () => {

  useEffect(() => {
    AOS.init({duration : 2000})
  }, [])

  return (
    <div className="h-full" >
        <div className="md:bg-[url('/images/bg.svg')]  flex md:items-center h-96 md:h-[calc(100vh_-_4rem)] xs:justify-center md:justify-start bg-no-repeat xs:bg-[url('/images/bg_header_mobile.svg')]   bg-black-primary xs:bg-bottom md:bg-right-bottom text-white " >
            <Wrapper>
                  <div className="flex flex-col md:items-start xs:items-center justify-center xs:h-[30%] md:h-full" >
                            <div data-aos="fade-right"  className='text-[2.2rem] font-bold md:block xs:hidden md:leading-[92px] md:w-1/2' >
                                    <h1  className="" >TẾT <br></br>VÀ <span className="text-pink-primary" >MÙA XUÂN</span></h1>
                            </div>

                            <div data-aos="fade-left"  >
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
                          <Notify>
                                          <div className="md:flex md:items-center " >
                                        <Image
                                            src="/images/tree.svg"
                                            alt="Picture of the author"
                                            width={50}
                                            height={50}
                                            className = "cursor-pointer md:block xs:hidden"
                                        />

                                        <div className="md:ml-5" >
                                                        <span className="font-bold mr-2 " >Thông báo:</span>
                                                        <span className="font-bold "  >Lan đã nở !</span>
                                        </div>
                                </div>

                                <div className='md:ml-[200px]' >
                                      Chúng tôi đã bắt đầu nhận đơn đặt hàng tại <span className='font-bold' >Chư Sê, Pleiku và Kon Tum</span> 
                                </div>
                          </Notify>
                      </SectionBody>
         </Section>

         <Section>
              <SectionTitle>
                   Hướng dẫn đặt hoa
              </SectionTitle>

              <SectionBody>
                 
                      <div data-aos="fade-up"  >
                        <div className='md:px-28 px-6 gap-4 mt-10 md:grid md:grid-cols-4 md:gap-x-[40px] ' >
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
                         <div className="flex items-center lg:flex-row xs:flex-col justify-center gap-14 px-5" >
                              
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
                                            className = "cursor-pointer mt-10 rounded-xl  h-auto md:w-auto w-1/2 border-3 border-solid border-pink-primary"
                                      />
                                      <p className="" >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>

                                  <div className='flex items-center gap-5 ' >
                                      <Image
                                            src="/images/blog-2.svg"
                                            alt="Picture of the author"
                                            width={284}
                                            height={213}
                                            className = "cursor-pointer mt-10 h-auto md:w-auto w-1/2  rounded-xl border-3 border-solid border-pink-primary"
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
                 <Slide/>
              </SectionBody>
         </Section>
      </div>  
    </div>
  )
}

export default Home