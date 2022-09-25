import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const upCount = () => {
    setCount(prevState => prevState + 1)
  }

  const downCount = () => {
    setCount(prevState => prevState - 1)
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={upCount}>up</button>
      <button onClick={downCount}>down</button>
    </>
  )
}

export default Counter;
