import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import CTAButton from "../Components/Core/Homepage/Button"
import pic1 from "../assets/Images/home_icon.png"
import CodeBlock from "../Components/Core/Homepage/CodeBlock"
import TimeLineSection from '../Components/Core/Homepage/TimeLineSection';
import LearningLanguageSection from '../Components/Core/Homepage/LearningLanguageSection';
import InstructorSection from '../Components/Core/Homepage/InstructorSection';
import Footer from '../Components/comman/Footer';
import ExploreMore from '../Components/Core/Homepage/ExploreMore';
import { ReviewSlider } from '../Components/comman/ReviewSlider';


const Home = () => {
  return (
    <div>  
        
        {/* Section 1 */}
    <div className=' mt-10 flex flex-col'>
      
      
    <div className='flex flex-col items-center  gap-10 sm:flex-row '>
     <div className='flex flex-col gap-10 ml-[2rem] mt-5 sm:ml-[3rem] md:ml-[4rem] lg:ml-[7rem] xl:ml-[9rem]'>

        <div className='w-[70%] sm:w-[100%]  '>
          <p className='text-[1.5rem] uppercase font-bold text-white sm:text-[1.7rem] md:text-[2.4rem] lg:text-[2.8rem] xl:text-[4rem]'>
            GROW up <span className='text-caribbeangreen-100'>Your</span> Skill in Hours
          </p>

        </div>

        <div className='flex flex-col gap-6'>
        
        <Link to={"/signup"} >

        <div className='group w-[75%]  bg-richblack-600 border border-5 border-blue rounded gap-3 transition-all duration-200 hover:scale-95 sm:w-[100%]  '>
          
          <div className='flex items-center px-2 py-4 gap-3 group-hover:bg-richblack-900 transition-all duration-200 text-pure-greys-400 font-bold'>
            <button>Become An Instructor</button>
            <FaArrowRightLong  />
          </div>

        </div>

        </Link>

        <div className='flex gap-5'>
          <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
          <CTAButton active={false} linkto={"/login"}>Book Demo</CTAButton>
        </div>
       
        </div>

    </div>


    <div className='w-[100%] flex items-center justify-center '>
        
        <div className='w-[60%] md:w-[65%] lg:w-[50%] xl:w-[55%] '>
             <img src={pic1} alt="" className='rounded-2xl' />
          
        </div>

    </div>


    </div>

    {/*Section Code*/}
    <div className='w-[100%] '>
    <CodeBlock 
     position={"flex-col md:flex-row "}
     heading={<div className='text-4xl font-semibold text-white'> Unlock your <span className='text-caribbeangreen-100' >coding potential </span> with our online courses. </div>
     }
     subheading={
      "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
     }
     ctabtn1={
      {
        btnText:"try it yourself",
        linkto:"/signup",
        active:true
      }
     }
     ctabtn2={
      {
        btnText:"Learn More",
        linkto:"/login",
        active:false
      }
     }
     codeblock={`<!DOCTYPE html>
      <html lang="en">
      <head>
      <title>This is myPage</title>
      </head>
      <body>
      <h1><a href="/">Header</a></h1>
      <nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>
      </nav>
      </body>`}

      codeColour={"text-yellow-25"}
    />

    </div>

    <div className='w-[100%] '>
    <CodeBlock 
     position={"flex-col md:flex-row lg:flex-row-reverse"}
     heading={<div className='text-4xl font-semibold text-white'>Start  <span className='text-caribbeangreen-100' >coding potential </span>  </div>
     }
     subheading={
      "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
     }
     ctabtn1={
      {
        btnText:"Continue Lesson",
        linkto:"/signup",
        active:true
      }
     }
     ctabtn2={
      {
        btnText:"Learn More",
        linkto:"/login",
        active:false
      }
     }
     codeblock={`<!DOCTYPE html>
      <html lang="en">
      <head>
      <title>This is myPage</title>
      </head>
      <body>
      <h1><a href="/">Header</a></h1>
      <nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>
      </nav>
      </body>`}

      codeColour={"text-yellow-25"}
    />

    </div>

    <ExploreMore />

    </div>
        
        {/* Section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700 mt-[-25%] lg:mt-[1px]'>

       <div className='homepage_bg h-[200px] lg:h-[310px]'>

          <div className='w-11/12 max-w-maxContent flex  flex-col items-center gap-5 mx-auto '>
          
                <div className='h-[10%] mt-[5%] lg:mt-[1%] lg:h-[150px]'></div> 
                  <div className='flex flex-row gap-7 text-white mt-10'>
          
                    <CTAButton active={true} linkto={"/signup"}>
                      <div className='flex items-center gap-3'>
                        Explore Full Catalog
                        <FaArrowRightLong/>
                      </div>
                    </CTAButton>

                    <CTAButton active={false} linkto={"/signup"}>
                      <div >
                        Learn More 
                      </div>
                    </CTAButton>

          </div>

       </div>
      
       </div>


       <div className='w-11/12 max-w-maxContent flex  flex-col items-center justify-between gap-7 mx-auto ' >
           
           <div className='flex gap-5 flex-col lg:flex-row mt-[100px] justify-between mb-10'>
            <div className='text-3xl font-bold w-[99%] lg:w-[45%] lg:text-4xl'>
              Get the Skills You need for a <span className='text-caribbeangreen-500'>Job that in demand</span>
            </div>
 
            <div className='flex flex-col gap-8 w-[85%] lg:w-[45%]'>
            <div className='text-[16px]'>
            The moder CodePlay is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
            </div>

            <CTAButton active={true} linkto={"/signup"}>
              Learn More
            </CTAButton>

           </div>

           </div>


           <TimeLineSection />

           <LearningLanguageSection />

      </div>


      </div>

            
        {/* Section 3 */}
        <div className='w-11/12 my-auto mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter  text-white'>
          
          <InstructorSection />

          <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
         <ReviewSlider /> 

        </div>
            
        {/* Section 4 */}

        <div>
          <Footer></Footer>
        </div>

            
        {/* Section 5 */}
       

    </div>

  )
}

export default Home