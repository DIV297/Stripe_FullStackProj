import React, { useContext, useEffect } from 'react'
import dataContext from '../context/dataContext';
import './PaymentPage.css'
const PaymentPage = () => {
useEffect(()=>{
        fetchplan();
    },[]);
    const context = useContext(dataContext);
    const {plans,fetchplan} = context;
    
  return ( 
    
    <div className='mainboxx'>
   <span style={{fontSize:20}}>Current Plan Details</span>
   <button className='cancelb'>Cancel</button>
   <p>Plan Type :{plans.plantype}</p>
   <p>Hardware: {plans.hardware}</p>
   <h3>Price:{plans.price}</h3>
    <button className='buttonp'>
        Change Plan
        </button></div>

    
  )
}

export default PaymentPage
