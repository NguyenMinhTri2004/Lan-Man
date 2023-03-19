import React from 'react'
import Image from 'next/image'

const Notify = () => {
  return (
    <div className="text-black bg-[#fbcfbd] w-[80%] mr-auto ml-auto py-1 h-fit border-2 rounded-2xl border-solid border-pink-primary" >
        <div className="w-full md:text-2xl  xs:text-lg md:px-14 xs:px-2 py-2" >
                <div className="flex items-center gap-3   " >
                        <Image
                            src="/images/tree.svg"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                            className = "cursor-pointer md:block xs:hidden"
                        />

                        <span className="font-bold " >Thông báo:</span>
                        <span className="font-bold "  >Lan đã nở !</span>
                </div>

                <div className='lg:ml-[12.8rem] w-full' >
                        <p className='break-words ' >Chúng tôi đã bắt đầu nhận đơn đặt hàng tại <span className='font-bold' >Chư Sê, Pleiku và Kon Tum</span> </p>
                </div>
        </div>
    </div>
  )
}

export default Notify