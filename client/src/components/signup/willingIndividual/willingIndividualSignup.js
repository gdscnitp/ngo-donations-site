import React from 'react'
import MultiStep from '../react-multistep'
import '../css/skeleton.css'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'



const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> }
]

const prevStyle = {'background': '#33c3f0', 'border-width': '2px'}
const nextStyle = {'background': '#33c3f0',  'border-width': '2px'}

export const Sign2 = () => (
  <div className='container cnt1' style={{backgroundColor:"white"}}>
    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
    <div className='container app-footer' >
    </div>
  </div>
)

