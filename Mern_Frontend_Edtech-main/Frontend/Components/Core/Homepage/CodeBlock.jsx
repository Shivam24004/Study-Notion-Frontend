import React from 'react'
import CTAButton from "./Button"
import { FaArrowRightLong } from "react-icons/fa6";
import {TypeAnimation} from "react-type-animation"

const CodeBlock = ({position,heading,subheading,ctabtn1,ctabtn2,codeblock,backgroundGradient,codeColour
}) => {
  return (
    <div className={`flex ${position} w-[100%]  justify-evenly mt-20 mb-20 gap-10 p-5 `}>
 
    {/* Section 1 */}
    <div className='flex flex-col w-[95%] gap-8 md:w-[60%]  '>
     {heading}

     <div className='text-richblack-300 font-semibold'>
      {subheading}
     </div>

     <div className='flex gap-7 mt-7'>
     <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
        <div className='flex gap-2 items-center'>
         {ctabtn1.btnText}
         <FaArrowRightLong />
        </div>
     </CTAButton>

     <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
        
         {ctabtn2.btnText}
        
     </CTAButton>

     </div>

    </div>

    <div className="h-fit code-border w-[95%] flex flex-row py-3 bg-transparent text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative lg:w-[470px] backdrop-blur  " >
      <div className="codebloack1 absolute"></div>
        {/* Indexing */}
        <div className="text-center flex flex-col  w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        {/* Codes */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColour} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  )
}

export default CodeBlock