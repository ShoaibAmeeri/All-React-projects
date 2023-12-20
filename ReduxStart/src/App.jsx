import { useSelector, useDispatch } from "react-redux"
import { increment } from "./features/counter/counterSlice"
import { decrement } from "./features/counter/counterSlice"

useSelector

function App() {
const count = useSelector(state => state.counter.value)
const dispatch = useDispatch()

  return (
    <>
      <h1>redux GEt Started</h1>
      <button onClick={()=>{dispatch(increment())}}>Incremet</button>
      {count}
      <button onClick={()=>dispatch(decrement())}>Decremet</button>
    </>
  )
}

export default App
