import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/home_explore';
import CourseCard from './CourseCard';

const tabsName=[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

const ExploreMore = () => {

   const [currentTab,setCurrentTab] =useState(tabsName[0]);
   const [courses,setCourses]=useState(HomePageExplore[0].courses);
   const [currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading);

   const setMyCards=(value)=>{
    setCurrentTab(value);
    const result=HomePageExplore.filter((course)=> course.tag === value);
    console.log(result);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
   }


  return (
    <div className='flex flex-col items-center gap-3'>

 
      <div className='text-4xl font-bold text-center text-white'>
        Unlock the
        <span className='text-caribbeangreen-200'> Power of Code</span>
      </div>

      <p className='text-center text-richblack-300 text-xl font-semibold mt-3 px-3'>
      Learn to Build Anything You Can Imagine
      </p>

      <div className='flex mt-5 bg-richblack-800 rounded-full mb-5 border-richblack-100 px-2 py-2 gap-4 invisible lg:visible'>
      {
        tabsName.map((element,index)=>
        {
          return (
            <div className={`text-[16px] flex flex-row items-center gap-2 
              ${currentTab === element ? "bg-richblack-900 text-richblack-5 font-medium": "text-richblack-200" } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-3   `} key={index}
              onClick={()=> setMyCards(element)}
              >
              {element}
            </div>
          )
        }) 

      }
      </div>

      <div className='h-[150px]'></div>

      <div className='lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-[80%] translate-y-[-25%] lg:translate-y-[80%]  text-black lg:mb-0 mb-7 '>
          {
            courses.map((element,index)=>{
              return (
                <CourseCard key={index} 
                cardData={element}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
                />
               
              )
            })
          }
      </div>

    </div>
  )
}

export default ExploreMore
