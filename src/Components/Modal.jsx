import React from 'react'

const Modal = ({ title, children, displayed, closeAction }) => {
  return (
    <div className={['Modal-wrapper', !displayed ? 'disabled' : null].join(' ')}>
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