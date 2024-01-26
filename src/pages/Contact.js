import React from 'react'
import{useState} from 'react'
import './Contact.css'

export default function Contact() {
  const [count ,setCount]=useState(0);

  const Increment =()=>{
    setCount(count+1);
  };
  const Decrement =()=>{
    setCount(count-1);
  };
  const Reset=()=>{
    setCount(0);
  };

  return (
    <div>
<div className='centerbox'>
  <div className='boxalign'>
    <h1 className='head'>Counter: {count}</h1>
    <div className='buttons'>
      <button onClick={Increment} style={{backgroundColor:"aqua",color:"red",border:"2px solid black",borderRadius:"20px",padding:"20px"}}>Increment</button>
      <div style={{padding:"10px"}}></div>
      <button onClick={Decrement} style={{backgroundColor:"aqua",color:"red",border:"2px solid black",borderRadius:"20px",padding:"20px"}}>Decrement</button>
      <div style={{padding:"10px"}}></div>
      <button onClick={Reset} style={{backgroundColor:"aqua",color:"red",border:"2px solid black",borderRadius:"20px",padding:"20px"}}>Reset</button>
    </div>
  </div>
</div>
    </div>
  )
}
