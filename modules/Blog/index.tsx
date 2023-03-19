import React from 'react'
import Section , {SectionBody , SectionTitle} from '@/common/components/Section'
import Image from 'next/image'
import Button from '@/common/components/Button'
import Wrapper from '@/common/components/Wrapper'
import Notify from '@/common/components/Notify'

const Blog = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/images/bg-about.png')]  " >
        <div className="bg-black-primary text-white" >
            <Section>
                   <SectionTitle>
                        <p className="text-white" > Mọi người quan tâm</p>
                   </SectionTitle>

                  
                   <SectionBody>
                            <Wrapper>
                                <div className="flex items-center lg:flex-row xs:flex-col justify-center gap-14  px-5" >
                                    
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
        </div>

        <div>
            <Section>
                      <SectionBody>
                          <Notify/>
                      </SectionBody>
             </Section>
        </div>

        <div>
              <Section>
                    <SectionBody>
                        <Wrapper>
                              <div className=" flex items-center flex-wrap text-base font-bold" >
                                  <div className='flex items-center gap-5 md:w-[45%] xs:w-full' >
                                      <Image
                                            src="/images/blog-3.svg"
                                            alt="Picture of the author"
                                            width={284}
                                            height={213}
                                            className = "cursor-pointer mt-10 rounded-xl object-cover  border-3 border-solid border-pink-primary"
                                      />
                                      <p className="" >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>

                                  <div className='flex items-center gap-5 md:w-[45%] xs:w-full' >
                                      <Image
                                            src="/images/blog-2.svg"
                                            alt="Picture of the author"
                                            width={284}
                                            height={213}
                                            className = "cursor-pointer mt-10  rounded-xl object-cover  border-3 border-solid border-pink-primary"
                                      />
                                      <p className=""   >Cành Lan trao nhau ngày Tết và ý nghĩa của loài Lan Hồ Điệp</p>
                                  </div>

                                  <div className='flex items-center gap-5  md:w-[45%] xs:w-full' >
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
                        </Wrapper>
                    </SectionBody>
              </Section>
        </div>
    </div>
  )
}

export default Blog