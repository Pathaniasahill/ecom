import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
  "placed",
  "order confirm",
  "shipped",
  "out for delivery",
  "delivered"
]
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full mt-10 py-5 border '>
      <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((lable)=><Step>
        <StepLabel sx={{color:"#9155FD", fontSize:"44px"

        }}>{lable}</StepLabel>
      </Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracker
