'use client'

import { useEffect, useState } from "react";

const CounterCard = ({initialValue, stepValue}) => {

    const [count, setCount] = useState(initialValue);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev + stepValue)}>Increment</button>
        <button onClick={()=> setCount(prev => prev - stepValue)}>Decrement</button>
    </div>
  )
}

export default CounterCard;