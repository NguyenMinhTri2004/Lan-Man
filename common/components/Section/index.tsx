import React from 'react'
import Image from 'next/image'


export const SectionBody = ({children} : any) => {
  return (
    <div className="w-full lg:px-2 sm:px-1 xs:px-1 md:px-1 py-2 " >
         {children}
    </div>
  )
}

export const SectionTitle = ({children} : any) => {
  return (
    <div className="w-full flex items-center  justify-between  py-2 text-black ">
        <div className="md:w-full xs:w-[50%]" >
            <Image
                      src="/images/line-left.svg"
                      alt="Picture of the author"
                      width={384}
                      height={27.75}
                      className = "cursor-pointer lg:w-[384px] xs:w-full xs:h-full "
            />
        </div>

        <div className=" flex items-center justify-center w-full h-fit" >
            <div className="font-bold lg:text-[3.2rem]  md:text-[2rem] xs:text-2xl text-center" >{children}</div>
        </div>

        <div className="md:w-full xs:w-[50%] flex justify-end" >
            <Image
                      src="/images/line-right.svg"
                      alt="Picture of the author"
                      width={384}
                      height={27.75}
                      className = "cursor-pointer lg:w-[384px] xs:w-full xs:h-full  "
            />
        </div>
    </div>
  )
}


const Section = ({children} : any) => {
  return (
    <div className='py-10 w-full'>
          {children}
    </div>
  )
}

export default Section

