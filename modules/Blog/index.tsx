import React from 'react'
import Section , {SectionBody , SectionTitle} from '@/common/components/Section'
import Image from 'next/image'
import Wrapper from '@/common/components/Wrapper'
import Notify from '@/common/components/Notify'

const Blog = () => {
  return (
    <div className="bg-no-repeat bg-cover  bg-[url('/images/bg-about.png')]  " >
        <div className="bg-black-primary/70 bg-no-repeat bg-cover text-white" >
            <Section>
                   <SectionTitle color = "white" >
                        <p className="text-white" > Mọi người quan tâm</p>
                   </SectionTitle>

                  
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
                                      <p className=" leading-[30px] " >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>

                                  <div className='flex items-center gap-5 ' >
                                      <Image
                                            src="/images/blog-2.svg"
                                            alt="Picture of the author"
                                            width={284}
                                            height={213}
                                            className = "cursor-pointer mt-10 h-auto md:w-auto w-1/2  rounded-xl border-3 border-solid border-pink-primary"
                                      />
                                      <p className=" leading-[30px] "   >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>
                              </div>
                         </div>
                    </Wrapper>
                   </SectionBody>
                  
            </Section>
        </div>

        <div>
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
        </div>

        <div>
              <Section>
                    <SectionBody>
                        <Wrapper>
                              <div className=" flex items-center flex-wrap text-base font-bold" >
                                  <div className='flex items-center gap-5 md:w-[45%] mr-5 xs:w-full' >
                                      <Image
                                            src="/images/blog-3.svg"
                                            alt="Picture of the author"
                                            width={284}
                                            height={213}
                                            className = "cursor-pointer mt-10 rounded-xl  h-auto md:w-auto w-1/2 border-3 border-solid border-pink-primary"
                                      />
                                      <p className=" leading-[30px] " >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>

                                  <div className='flex items-center gap-5 md:w-[45%] xs:w-full' >
                                      <Image
                                            src="/images/blog-2.svg"
                                            alt="Picture of the author"
                                            width={284}
                                            height={213}
                                            className = "cursor-pointer mt-10 rounded-xl  h-auto md:w-auto w-1/2 border-3 border-solid border-pink-primary"
                                      />
                                        <p className=" leading-[30px] " >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>

                                  <div className='flex items-center gap-5 md:w-[45%] xs:w-full' >
                                      <Image
                                            src="/images/blog-2.svg"
                                            alt="Picture of the author"
                                            width={284}
                                            height={213}
                                            className = "cursor-pointer mt-10 rounded-xl  h-auto md:w-auto w-1/2 border-3 border-solid border-pink-primary"
                                      />
                                      <p className=" leading-[30px] "  >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>
                              </div>
                        </Wrapper>
                    </SectionBody>
              </Section>
        </div>
    </div>
  )
}

export default Blog