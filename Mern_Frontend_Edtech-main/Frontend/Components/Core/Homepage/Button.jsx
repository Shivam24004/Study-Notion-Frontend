import React from 'react'
import { Link } from 'react-router-dom'

const button = ({children,active,linkto}) => {
  return (
   <Link to={linkto}>

    <button  className={`bg-pure-greys-400 p-2 rounded font-semibold 
    ${active ? "bg-yellow-50 text-black": "bg-richblack-600 text-white"} hover:scale-95 transition-all duration-200 `}>{children}</button>
   
   </Link>
  )
}

export default button