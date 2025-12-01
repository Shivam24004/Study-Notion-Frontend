import { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import './App.css'
import Home from "./Pages/Home"
import Navbar from './Components/comman/Navbar'
import OpenRoute from './Components/Core/Auth/OpenRoute'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'
import UpdatePassword from './Pages/UpdatePassword'
import VerifyEmail from './Pages/VerifyEmail'
import { About } from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Components/Core/Dashboard/MyProfile'
import PrivateRoute from './Components/Core/Auth/PrivateRoute'
import Dashboard from './Pages/Dashboard'
import Error from './Pages/Error'
import Settings from './Components/Core/Dashboard/Settings'
import Cart from './Components/Core/Dashboard/Cart'
import EnrolledCourses from './Components/Core/Dashboard/EnrolledCourses'
import { ACCOUNT_TYPE } from './utils/constants'
import { useSelector } from 'react-redux'
import AddCourse from './Components/Core/Dashboard/AddCourse'
import MyCourses from './Components/Core/Dashboard/MyCourses'
import EditCourse from './Components/Core/Dashboard/EditCourse/index'
import { Catalog } from './Pages/Catalog'
import CourseDetails from './Pages/CourseDetails'
import ViewCourse from "./Pages/ViewCourse"
import VideoDetails from "./Components/Core/ViewCourse/VideoDetails"
import Instructor from "./Components/Core/Dashboard/Instructor"

function App() {

  const {user }= useSelector((state)=> state.profile)

  return ( 
     <div className='w-screen min-h-screen bg-richblue-900 flex flex-col'>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>}  />
        <Route path="/catalog/:catalogName" element={<Catalog/>}  />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="signup" element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route path="login" element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }/>

        <Route path="forgot-password" element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route path="update-password/:id" element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
         <Route path="verify-email" element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
         <Route path="about" element={
           
              <About />
          
          }
        />
         <Route path="contact" element={
              <Contact />
          }
        />
         <Route  element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
         

          {user?.accountType === ACCOUNT_TYPE.STUDENT &&(
              <>
             <Route path="dashboard/Cart" element={<Cart />} />
             <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
             </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR &&(
              <>
                <Route path="dashboard/instructor" element={<Instructor />} />
             <Route path="dashboard/add-course" element={<AddCourse />} />
             <Route path="dashboard/my-courses" element={<MyCourses />} />
             <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
           </>
          )}

        </Route>
         

         <Route path="*" element={<Error />} />

         <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

      </Routes>
    
    </div>
  )
}

export default App
