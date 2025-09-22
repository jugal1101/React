import React,{useState} from 'react'

// file - import 'file location'
// component/function - file - import name from 'file location'
// i=

// real dom - 3 - js --> dom, reload
// virtual dom --> component, copy

// state - data/information/variable ->> state --> UI update
// useState --> react

// let x = 10;
// int x = 10;

import "./Home.css";
import Counter from './Counter';

export default function Home() {
    const [count,setCount] = useState(10);
    // count = variable --> display
  return (
    <div>
        {/* <h1>{count}</h1>
      <button onClick={()=>{
        // let temp = count;
        // temp++;
        // setCount((state)=>state+1);
        setCount(count+1) // count++, count = count + 1, count + 1
      }}>Submit</button> */}

      <Counter/>
    </div>
  )
}
