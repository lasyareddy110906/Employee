import {useContext} from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import Test from './Test'
import { useCounterStore } from '../stores/useCounterStore'

function Home() {
  const newCounter = useCounterStore((state)=>state.newCounter)
  const incrementCounter = useCounterStore((state)=>state.incrementCounter)

  console.log("home")
  return (
    <div >
      
      <h1 className="text-2xl font-bold">Counter Home: {newCounter}</h1>
      <button onClick={incrementCounter} className="bg-blue-500 text-white px-4 py-2 rounded gap-1.5">
        Increment
      </button>
     <Test/>
       
    </div>
  )
}

export default Home