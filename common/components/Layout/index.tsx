import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({children} : any) => {
  return (
    <div className="font-imb bg-[#fdf4ea]" >
        <Header/>
            <div className="mt-16" >
                {children}
            </div>
        <Footer/>   
    </div>
  )
}

export default Layout