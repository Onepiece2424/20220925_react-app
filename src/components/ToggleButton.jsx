import { useState, useEffect } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  useEffect(() => {
    console.log("Current state is...", open)
    if (open) {
      console.log("Subscribe database...")
      setTimeout(() => {
        console.log("タイムアウト！！！")
      }, 3000);
    }
    return () => {
      console.log("Unsubscribe database...")
    }
  })

  return (
    <>
      <p>OPEN/CLOSE切り替えボタン</p>
      <button onClick={toggle}>{open ? "OPEN" : "CLOSE"}</button>
    </>
  )
}

export default ToggleButton;
