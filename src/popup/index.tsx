import { useState } from "react"

import "./styles/style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16
      }}>
      <h1>Popup</h1>
    </div>
  )
}

export default IndexPopup
