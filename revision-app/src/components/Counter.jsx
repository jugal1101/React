import React, { useState } from 'react'
import "./Home.css"

// counter - ++,--,+10, 2x
// useStae - PUSH

export default function Counter() {
   const [count,updateCount] = useState([]);
  return (
    <div className='counter'>
      <h1>{count}</h1>
      <button onClick={()=>{
        const arr = [...count]; // arr = count
        arr.push(10);
        updateCount(arr)
      }}>++</button>
    </div>
  )
}
