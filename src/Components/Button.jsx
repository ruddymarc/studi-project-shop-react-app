import React from 'react'
import './Button.css'

const Button = ({ color, rounded, sticky, label, disabled, onClick}) => {
  const classList = [
    'Button',
    rounded ? 'rounded' : null,
    sticky ? 'sticky-right' : null
  ]
  
  return (
    <button 
      className={classList.join(' ')}
      style={{ 
        color: color ? 'snow' : color, 
        backgroundColor: color || 'snow',
        padding: '.2em 2em'
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button