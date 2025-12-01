import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import lap_girl from "../../../assets/TimeLineLogo/Lap_girl.png"

const timeline=[

    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully committed to the success company ",
    },
    {
        Logo: Logo2,
        heading: "Leadership",
        Description: "Fully committed to the success company ",
    },
    {
        Logo: Logo3,
        heading: "Leadership",
        Description: "Fully committed to the success company ",
    },
    {
        Logo: Logo4,
        heading: "Leadership",
        Description: "Fully committed to the success company ",
    },
]

const TimeLineSection = () => {
  return (
    <div >
      <div className='flex flex-col lg:flex-row gap-20 mb-10 items-center mt-10'>
        
        <div className='w-[90%] flex flex-col gap-10 items-center lg:w-[45%] lg:gap-5 '>
        {
            timeline.map((element,index)=>
            {
                return (
                    <div className='flex flex-col gap-6' key={index}>
                      
                      <div className='flex  gap-6'>
                        <div className='w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]'>
                         <img src={element.Logo} alt="" />
                        </div>

                        <div>
                            <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                            <p className='text-base'> {element.Description}</p>
                        </div>
                        </div>
                        <div className={`hidden ${index === 3 && "invisible" } lg:block  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}></div>

                    </div>
                )
            })
        }

        </div>

        <div className=" relative w-fit h-fit  shadow-[0px_0px_30px_0px] items-center justify-center flex flex-col">
      
          <img src={lap_girl} alt="timelineImage" className='shadow-white object-cover h-fit lg:mt-[-13rem] w-[100%]'/>

         <div className='w-[80%] absolute bg-caribbeangreen-700 flex flex-col gap-10 sm:flex-row text-white uppercase py-8 translate-y-[100%] sm:translate-y-[250%] md:translate-y-[300%] lg:translate-y-[130%]'>
          
          

           <div className='flex gap-5 items-center border-r border-caribbeangreen-300 px-7'>
              <p className='text-3xl font-bold'>10</p>
              <p className='text-caribbeangreen-300 text-sm'>Years Of Experience</p>

           </div>
          
           <div className='flex gap-5 items-center px-7'>
              <p className='text-3xl font-bold'>250</p>
              <p className='text-caribbeangreen-300 text-sm'>Type of Courses</p>

           </div>


         </div>

        </div>

      </div>

    </div>
  )
}

export default TimeLineSection