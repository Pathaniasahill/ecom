import React from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate =useNavigate()
  const handleCheckOut=()=>{
    navigate("/summary")
  }
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative ' >
            <div className='col-span-2 pt-4' >
             { [1,1,1,1].map(item=> <CartItem/> )}
            </div>
          
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 pt-4 shadow-lg border rounded'>
           <div className='border rounded'>
             <p className='uppercase font-bold opacity-60 pb-4'> Price details</p>
             <hr/>
             <div className='space-y-3 font-semibold mb-10'>
                <div className='flex justify-between pt-3 text-black '>
                  <span>Price</span>
                 <span className='text-green-600'>Rs.4678</span>
                </div>
                                <div className='flex justify-between pt-3 '>
                  <span >Discount</span>
                 <span className='text-green-600'>-Rs.67</span>
                </div>
                                <div className='flex justify-between pt-3  '>
                  <span>Delhivery Charge</span>
                 <span className='text-green-600'>Free</span>
                </div>
                                <div className='flex justify-between pt-3 font-bold'>
                  <span>Total Amount</span>
                 <span className='text-green-600 font-bold'>Rs.4678</span>
                </div>

             </div>
             <div className=''>
                 <Button onClick={handleCheckOut}  variant="contained " className='w-full ' sx={{px:"2.5rem" ,bgcolor:"Blue", color:"white", }}>
                  Check Out
                </Button>
             </div>
             
           </div>
        </div>
        </div>
        
      
    </div>
  )
}

export default Cart
