import React from 'react'
import { useSelector } from 'react-redux'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({title,description1,description2,image,formType}) => {

    const {loading} = useSelector((state)=> state.auth);

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] ">
   
    {loading ? (
         <div className="spinner"></div>
      ) : 
      (
        <div className="mx-auto flex w-[100%] lg:w-[100%] lg:flex-row lg:justify-around items-center justify-center max-w-maxContent flex-col gap-y-12 py-12 ">
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
         </h1>

         <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>

            {formType === "signup" ? <SignupForm /> : <LoginForm />}
         </div>

         <div className=" mx-auto w-[60%] mt-[1%] ml-[20%] max-w-[510px] items-center flex justify-center md:mx-0 invisible lg:visible">
          
          <img
            src={image}
            alt="Students"
            width={608}
            height={900}
            loading="lazy"
            className="w-[100%] -top-4 right-4 z-10 rounded"
          />
        </div>

        

        </div>
      )}

    </div>
  )
}

export default Template