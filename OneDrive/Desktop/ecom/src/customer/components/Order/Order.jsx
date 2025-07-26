import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'
const orderStatus=[
    {lable:"on the way",value:"on_the_way"},
    {lable:"Delivered",value:"Delivered"},
    {lable:"Cancelled",value:"Cancelled"},
    {lable:"Returned",value:"Returned"},
]
const Order = () => {
  return (
    <div className='lg:px-20 px-5'>
     <Grid className="mt-10" container spacing={2} sx={{justifyContent:"space-between "}}>
        <Grid item size={2.5}>
           <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
              <h1 className='font-bold text-large
              '>Filter</h1>
              <div className='space-y-4 mt-10'>
                <h1 className='font-semibold'>Order 
                    status</h1>
                 {orderStatus.map((option)=><div className='flex items-center'> 
                        <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                        <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}
                        >{option.lable}</label>
                    </div>
)}   
              </div>
           </div>
        </Grid>
        <Grid item size={9.5}>
         <div className='space-y-3'>
            
             {[1,1,1,1,1].map((item)=><OrderCard/>)}
         </div>
          
        </Grid>
     </Grid>
    </div>
  )
}

export default Order
