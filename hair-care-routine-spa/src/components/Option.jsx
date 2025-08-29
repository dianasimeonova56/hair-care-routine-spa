import React from 'react'
import '../assets/option.css'

const Option = ({id, text}) => {
  return (
    <button className="option">{id}. {text}</button>
  )
}

export default Option