import React from 'react'
import { apiconnector } from '../apiconnecter';
import toast from 'react-hot-toast';
import { catalogData } from '../apis';

export const getCatalogPageData =async (categoryId) => {
   
   let toastId=toast.loading("loading....");
   let result=[]; 
  try {

    const response=await apiconnector("POST", catalogData.CATALOGPAGEDATA_API,   {
        categoryId: categoryId,
      })
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Catagory page data.")
      }
      result = response?.data
      

    } catch (error) {
      console.log("CATALOGPAGEDATA_API API ERROR............", error)
      toast.error(error.message)
      result = error.response?.data
    }
    toast.dismiss(toastId)
    return result

}
