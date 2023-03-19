import React from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import Button from '../Button'


const Footer = () => {
  return (
    <div className="w-full overflow-hidden" >
          <div className="w-full "   >
            <Wrapper >
                  <div className="flex w-full xs:flex-col xs:text-[9px] md:text-base md:flex-row items-center md:gap-5 xs:gap-0 justify-center mb-20 text-center" >
                      <div className="flex items-center gap-5" >
                            <h1>Vào</h1>
                            <Button>
                                XEM HOA
                            </Button> 
                      </div>
                      <h1> để xem toàn bộ mẫu hoa của Lan Man  </h1>
                  </div>

                  <div className="bg-[url('/images/footer_bg1.svg')] bg-no-repeat w-full h-fit flex items-center justify-between xs:px-5 md:px-20 bg-left-bottom bg-contain" >
                            <div className="w-[50%]" >
                                    <div className="font-bold lg:text-7xl md:text-4xl sm:text-base" >
                                          Đã đến lúc <div className="mb-5" ></div>
                                          mang mùa Xuân <div className="mb-5" ></div>
                                          về với gia đình
                                    </div>
                            </div>

                            <div className="w-[40%]"  >
                                  <Image
                                        src="/images/phone.svg"
                                        alt="Picture of the author"
                                        width={429}
                                        height={766}
                                        className = "cursor-pointer xs:w-full xs:h-full lg:w-[429px]"
                                  />
                            </div>
                  </div>
            </Wrapper>

                  <div className="bg-[url('/images/bg_footer2.png')] bg-no-repeat  flex items-center justify-center  h-[50rem] bg-cover w-full" >
                            <div className='text-white w-[80%] mt-24 h-[26rem] backdrop-blur-lg bg-[#c4c4c428] backdrop-filter p-20 rounded-2xl' >
                                  <div className='w-full flex items-center justify-center mb-2' >
                                      <Image
                                            src="/images/logo.svg"
                                            alt="Picture of the author"
                                            width={262}
                                            height={60}
                                            className = ""
                                      />
                                  </div>

                                  <div className = "flex md:text-2xl xs:text-sm md:flex-row xs:flex-col h-fit md:items-center xs:items-start md:w-[85%] xs:w-full justify-between" >
                                       <ul className = "" >
                                           <li className='flex items-center gap-2' >
                                                <Image
                                                  src="/images/location.svg"
                                                  alt="Picture of the author"
                                                  width={20}
                                                  height={20}
                                                  className = ""
                                                />

                                                <p className = "cursor-pointer hover:text-pink-primary">856 Hùng Vương, TT. Chư Sê, h. Chư Sê, Gia Lai</p>
                                           </li>

                                           <li className='flex items-center gap-2' >
                                                <Image
                                                  src="/images/location.svg"
                                                  alt="Picture of the author"
                                                  width={20}
                                                  height={20}
                                                  className = ""
                                                />

                                                <p className = " cursor-pointer hover:text-pink-primary">856 Hùng Vương, TT. Chư Sê, h. Chư Sê, Gia Lai</p>
                                           </li>

                                           <li className='flex items-center gap-2' >
                                                <Image
                                                  src="/images/location.svg"
                                                  alt="Picture of the author"
                                                  width={20}
                                                  height={20}
                                                  className = ""
                                                />

                                                <p className = "cursor-pointer hover:text-pink-primary">856 Hùng Vương, TT. Chư Sê, h. Chư Sê, Gia Lai</p>
                                           </li>
                                       </ul>

                                       <ul>
                                           <li className='flex items-center gap-2'  >
                                                   <Image
                                                      src="/images/arrow.svg"
                                                      alt="Picture of the author"
                                                      width={30}
                                                      height={25}
                                                      className = ""
                                                    />

                                                    <p className = "cursor-pointer hover:text-pink-primary"  >TRANG CHỦ</p>
                                           </li>

                                           <li className='flex items-center gap-2'  >
                                                   <Image
                                                      src="/images/arrow.svg"
                                                      alt="Picture of the author"
                                                      width={30}
                                                      height={25}
                                                      className = ""
                                                    />

                                                    <p className = "cursor-pointer hover:text-pink-primary"  >TRANG CHỦ</p>
                                           </li>

                                           <li className='flex items-center gap-2'  >
                                                   <Image
                                                      src="/images/arrow.svg"
                                                      alt="Picture of the author"
                                                      width={30}
                                                      height={25}
                                                      className = ""
                                                    />

                                                    <p className = "cursor-pointer hover:text-pink-primary"  >TRANG CHỦ</p>
                                           </li>
                                       </ul>
                                  </div>
                            </div>
                  </div>
          </div>
    </div>
  )
}

export default Footer