import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { ToTopButton } from '../Button'

const Layout = ({children} : any) => {
  return (
    <div className="font-imb bg-[#fdf4ea]" >
        <Header/>
            <div className="mt-16" >
                {children}
            </div>
         <ToTopButton/>   
        <Footer/>   
    </div>
  )
}

export default Layout