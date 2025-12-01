import signupImg from "../assets/Images/signup.jpeg"
import Template from "../Components/Core/Auth/Template"

const Signup = () => {
  return (
    <Template 
    title="Join the millions learning to code with CodePlay for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      />
  )
}

export default Signup