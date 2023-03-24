import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link'

const Button = ({children} : any) => {
  return (
    <Link href = "/flowers" >
      <div className="bg-pink-primary w-[10rem] mx-2 hover:text-pink-primary hover:scale-[1.2] ease-in-out duration-300 transition hover:bg-transparent border-2 border-solid border-pink-primary h-[2.7rem] text-white flex items-center justify-center cursor-pointer" >
              <p className="text-sm font-semibold" >{children}</p>
      </div>
    </Link>
  )
}

export const ToTopButton = () => {

    const router = useRouter();
    return (
         <Link href = {`/${router.pathname}`} className="fixed z-[10] bottom-8 right-10" >
             <Image
                        src="/images/back-to-top.webp"
                        alt="Picture of the author"
                        width={60}
                        height={60}
                        className = "cursor-pointer"
              />
         </Link>
    )
}

export default Button