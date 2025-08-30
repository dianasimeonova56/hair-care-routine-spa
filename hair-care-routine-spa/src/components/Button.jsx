import React from 'react'
import '../assets/button.css'

function Button({text, status}) {
  return (
    <button className="btn" disabled={status}>{text}</button>
  )
}

export default Button