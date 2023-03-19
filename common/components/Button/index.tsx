import React from 'react'

const Button = ({children} : any) => {
  return (
    <div className="bg-pink-primary w-40 hover:scale-125 ease-in-out duration-300 transition hover:bg-transparent border border-solid border-pink-primary   h-10 text-white flex items-center justify-center cursor-pointer" >
            <p className="text-sm font-semibold" >{children}</p>
    </div>
  )
}

export default Button