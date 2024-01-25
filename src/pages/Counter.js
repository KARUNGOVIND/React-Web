import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [count ,setCount] = useState(0);
    let [minus ,setMinus] =useState("");
  return (
    <div>
        <p>{count}</p>
        <p>{minus}</p>
        <button onClick={() =>
        setCount(count+ 25)
        }>Click</button>
        <button onClick={() =>
        setMinus(minus=count-10)}>Click</button>
    </div>
  )
}
