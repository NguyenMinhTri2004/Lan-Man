import React from 'react'

const Wrapper = ({children} : any) => {
  return (
    <div className="  py-3 md:px-12  xs:px-1" >
          {children}
    </div>
  )
}

export default Wrapper