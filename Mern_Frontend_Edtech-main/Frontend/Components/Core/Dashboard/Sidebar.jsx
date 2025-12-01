import React, { useState } from 'react'
import { VscSignOut } from "react-icons/vsc"
import { sidebarLinks } from '../../../data/dashboard-links'
import { useDispatch, useSelector } from 'react-redux'
import SidebarLink from './SidebarLink';
import { useNavigate } from 'react-router';
import ConfirmationModal from '../../comman/ConfirmationModal';
import { logout } from '../../../services/operations/authAPI';

const Sidebar = () => {

   const {user, loading : profileLoading} =useSelector((state)=> state.profile);
   const { loading : authLoading} =useSelector((state)=> state.auth);
   const [confirmationModal,setConfirmationModal]=useState(null);
   const dispatch = useDispatch()
   const navigate = useNavigate()

   if(profileLoading || authLoading)
   {
      return (
        <div className='mt-10'>
            Loading...
        </div>
      )
   }

  return (
    <>
    <div >
         <div  className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10" > 
              <div className="flex flex-col">
                {
                 sidebarLinks.map((link)=>{
                  
                    if(link.type && user.accountType !== link.type) return null;

                     return (
                        <SidebarLink key={link.id} link={link} iconName={link.icon} />
                     )

                 })
                }
              </div>

              <div className='mx-auto w-10/12 bg-richblack-600 h-[1px] mt-6 mb-10 '> </div>

              <div className="flex flex-col">
                <SidebarLink
                  link={{ name: "Settings", path: "/dashboard/settings" }}
                  iconName="VscSettingsGear"
                />
        
              <button onClick={()=> {
                setConfirmationModal({
                   text1:"Are Your Sure?",
                   text2:"You Will Be Logged Out",
                   btn1Text:"LogOut",
                   btn2Text:"Cancel",
                   btn1Handler:()=> dispatch(logout(navigate)),
                   btn2Handler:()=> dispatch(setConfirmationModal(null))
                })  
              }} className="px-8 py-2  text-sm font-medium text-white">
                   <div  className="flex items-center gap-x-2">
                   <VscSignOut className="text-lg" />
                    <span>Logout</span>
                   </div>

              </button>

              </div>
 
         </div>

    </div>
     {confirmationModal && <ConfirmationModal modalData={confirmationModal}/> }
    </>
  )
}

export default Sidebar