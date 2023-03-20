import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link'

const Button = ({children} : any) => {
  return (
    <div className="bg-pink-primary w-40 hover:scale-125 ease-in-out duration-300 transition hover:bg-transparent border border-solid border-pink-primary   h-10 text-white flex items-center justify-center cursor-pointer" >
            <p className="text-sm font-semibold" >{children}</p>
    </div>
  )
}

export const ToTopButton = () => {

    const router = useRouter();
    return (
         <Link href = {`/${router.pathname}`} className="fixed bottom-8 right-8" >
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