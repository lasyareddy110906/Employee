import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import Test from './Test'
import { useCounterStore } from '../stores/useCounterStore'

function Home() {
  const newCounter = useCounterStore((state) => state.newCounter)

  console.log("home")

  return (
    <div className="bg-pink-300 min-h-screen flex flex-col items-center justify-center">
      
      <h1 className="text-2xl font-bold">
        Counter Home: {newCounter}
      </h1>

      <button
        onClick={incrementCounter}
        className="bg-blue-500 text-white px-4 py-2 rounded gap-1.5 mt-4"
      >
        Increment
      </button>

      <Test />
       
    </div>
  )
}

export default Home
