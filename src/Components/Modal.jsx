import React from 'react'
import './Modal.css'

const Modal = ({ title, children, displayed, closeAction }) => {
  return (
    <div className={['Modal-wrapper', displayed ? 'show' : null].join(' ')}>
      <span 
        className='close'
        style={{ position: 'static', top: '.5em', right: '.5em', marginLeft: 'auto' }} 
        onClick={closeAction}
      >
        Ⓧ
      </span>
      <h2>{title}</h2>
      <div className="Modal-content">
        {children}
      </div>
    </div>
  )
}

export default Modal