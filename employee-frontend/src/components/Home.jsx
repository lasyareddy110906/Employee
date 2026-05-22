import Test from './Test'
import { useCounterStore } from '../stores/useCounterStore'

function Home() {

  const newCounter = useCounterStore((state) => state.newCounter)

  const incrementCounter = useCounterStore(
    (state) => state.incrementCounter
  )

  console.log("home")

 return (
  <div className="bg-pink-300 min-h-screen flex flex-col items-center justify-center">

    <div className="flex flex-col items-center gap-4">

      <h1 className="text-2xl font-bold">
        Counter Home: {newCounter}
      </h1>

      <button
        onClick={incrementCounter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>

      <Test />

    </div>

  </div>
)
}

export default Home
