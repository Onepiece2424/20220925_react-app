import { useState } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <>
      <p>OPEN/CLOSE切り替えボタン</p>
      <button onClick={toggle}>{open ? "OPEN" : "CLOSE"}</button>
    </>
  )
}

export default ToggleButton;
