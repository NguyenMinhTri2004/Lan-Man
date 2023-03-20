import React from 'react'
import Image from 'next/image'

const Notify = () => {
  return (
    <div className="md:mx-40 bg-[#FBCFBD] md:mb-12 md:text-2xl leading-[32px] md:leading-[36px] md:py-3 md:px-20 my-4 mx-5 py-3 px-5 border-pink-primary border-[3px] border-solid rounded-[17px]" >
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
                        <p className='' >Chúng tôi đã bắt đầu nhận đơn đặt hàng tại <span className='font-bold' >Chư Sê, Pleiku và Kon Tum</span> </p>
                </div>
    </div>
  )
}

export default Notify