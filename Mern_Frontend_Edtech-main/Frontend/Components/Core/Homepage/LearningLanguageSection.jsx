import React from 'react'
import Know_your_progress from "../../../assets/Images/Know_your_progress.svg"
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg"
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg"
import CTAButton from "../Homepage/Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-10'>
      <div className='flex flex-col gap-5 items-center '>
         
         <div className='text-4xl font-bold text-center'>
           Your Swiss Knife for 
            <span className='text-caribbeangreen-500'> learning any language</span>
         </div>

         <div className='text-center text-richblack-600 mx-auto text-base w-[72%]'>
           
         Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
         </div>


         <div className='flex items-center lg:flex-row flex-col justify-center mt-5'>
            <img src={Know_your_progress} alt="Know Your Progress"  className='object-conatin lg:-mr-32 '/>
            <img src={Compare_with_others} alt="Know Your Progress"  className='object-conatin  mt-[-7%] lg:mt-[0%]'/>
            <img src={Plan_your_lessons} alt="Know Your Progress"  className='object-conatin lg:-ml-36  mt-[-14%] lg:mt-[0%]'/>

         </div>

         <div>
            <CTAButton active={true} linkto={"/signup"}>
               Learn More
            </CTAButton>
         </div>

      </div>

    </div>
  )
}

export default LearningLanguageSection