import React from 'react'
import { useContext } from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import { useCounterStore } from '../stores/useCounterStore'
function Test() {
    const newCounter1 = useCounterStore((state)=>state.newCounter1)
  const incrementCounter1 = useCounterStore((state)=>state.incrementCounter1)
      console.log("test")
  return (
    <div>
        <h1 className="text-2xl font-bold">Counter Test: {newCounter1}</h1>
      <button onClick={incrementCounter1} className="bg-blue-500 text-white px-4 py-2 rounded">
        change 
      </button>
    </div>
  )
}

export default Test