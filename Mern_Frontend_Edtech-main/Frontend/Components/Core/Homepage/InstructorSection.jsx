import React from 'react'
import Instructor from "../../../assets/Images/Instructor_img.png"
import { FaArrowRightLong } from "react-icons/fa6";
import CTAButton from "../Homepage/Button"

const InstructorSection = () => {
  return (
    <div className='mt-20 mb-10'>
      
      <div className='flex flex-col lg:flex-row gap-20 items-center'>
         
         <div className='w-[80%] flex items-center justify-center'>

            <img src={Instructor} alt="" className='shadow-white w-[400px] h-[400px] object-cover rounded'/>

         </div>

         <div className='flex flex-col w-[100%] lg:-w-[50%] gap-10 p-2' >

            <div className='text-4xl font-bold'>
            Become an
            <span className='text-caribbeangreen-200'> Instructor</span>
            </div>

            <p className='font-medium text-[16px] w-[80%]  text-richblack-300'>
            Instructors from around the world teach millions of students on CodePlay. We provide the tools and skills to teach what you love.
            </p>

            <CTAButton active={true} linkto={"/signup"} >
                <div className='flex gap-2 items-center p-2 font-semibold'>
                   Start Learning Today
                   <FaArrowRightLong />
                </div>
            </CTAButton>

         </div>

      </div>

    </div>
  )
}

export default InstructorSection