import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const upCount = () => {
    setCount(prevState => prevState + 1)
  }

  const downCount = () => {
    setCount(prevState => prevState - 1)
  }

  useEffect(() => {
    console.log("Current count is ...", count) // console.log(a, b)のように引数が複数の時は、a,bそれぞれ表示される。
   })

  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={upCount}>up</button>
      <button onClick={downCount}>down</button>
    </>
  )
}

export default Counter;
