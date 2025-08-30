import React from 'react'
import '../assets/option.css'

const Option = ({ id, text, isSelected, onClick }) => {
  return (
    <button className={`option ${isSelected ? "selected" : ""}`}
      onClick={onClick}>{id}. {text}</button>
  )
}

export default Option