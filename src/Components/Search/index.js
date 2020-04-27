import React from "react"

export default ({ handleTyping }) => (
  <input type="text" onKeyUp={handleTyping} />
)
