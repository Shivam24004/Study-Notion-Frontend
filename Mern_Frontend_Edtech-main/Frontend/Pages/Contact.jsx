import React from 'react'
import ContactDetails from '../Components/Core/ContactPage/ContactDetails'
import ContactForm from '../Components/Core/ContactPage/ContactForm'
import Footer from '../Components/comman/Footer'
import { ReviewSlider } from '../Components/comman/ReviewSlider'

const Contact = () => {
  return (
    <div>
        <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        <div className="lg:w-[60%]">
          <ContactForm />
        </div>

        </div>
      
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8  text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>

        <ReviewSlider />
      
      </div>
      <Footer />


    </div>
  )
}

export default Contact