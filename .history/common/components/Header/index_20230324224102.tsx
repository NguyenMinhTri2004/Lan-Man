import React from 'react'
import Link from 'next/link'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import Button from '../Button'
import { useRouter } from "next/router";

const Header = () => {

  const router = useRouter()

 
  return (
    <div className="fixed top-0 w-full z-[10] bg-black-primary text-white font-bold text-base overflow-hidden" >
        <Wrapper>
              <div className="flex items-center md:justify-center xs:justify-between w-[93%]" >
                <Link href = "/" >
                    <Image
                        src="/images/logo.svg"
                        alt="Picture of the author"
                        width={262}
                        height={60}
                        className = "cursor-pointer mr-5"
                    />
                </Link>
                  
                       
                                <div className = "cursor-pointer mx-auto  md:block xs:hidden "  >
                                    
                                     <Link  href="/"  >
                                          <p className = {` ${router.pathname === "/" ? "text-pink-primary" : "text-white"}  no-underline`} >TRANG CHỦ</p>
                                     </Link>
                                    
                                </div>
                        

                       
                                <div className = "cursor-pointer mx-auto  md:block xs:hidden "  >
                                    <Link href = "/blogs" >
                                        <p className = {` ${router.pathname === "/blogs" ? "text-pink-primary" : "text-white"}  no-underline`} >Bài Viết</p>
                                    </Link>
                                </div>
                        

                         <div className = "cursor-pointer  mx-auto md:block xs:hidden "  >
                             <Link href = "/about"  >
                                   <p className = {` ${router.pathname === "/about" ? "text-pink-primary" : "text-white"}  no-underline`} >THÔNG TIN SHOP</p>   
                             </Link>
                             
                         </div>
                  
                 <div className = "cursor-pointer ml-auto  md:block xs:hidden"  >
                      <Button>
                            XEM HOA
                      </Button>
                 </div>

                 <Image
                      src="/images/menu_mobile.svg"
                      alt="Picture of the author"
                      width={40}
                      height={40}
                      className = "cursor-pointer md:hidden xs:block mr-5"
                  />
              </div>
        </Wrapper>
    </div>
  )
}

export default Header