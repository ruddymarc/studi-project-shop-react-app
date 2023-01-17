import React from 'react'
import './Modal.css'

const Modal = ({ title, children, displayed }) => {
  return (
    <div className={['Modal-wrapper', displayed ? 'show' : null].join(' ')}>
      <span 
        className='close'
        style={{ position: 'absolute', top: '.5em', right: '.5em', marginLeft: 'auto' }}
        onClick={children.filter(child => child.key === 'btnClose')[0]?.props?.onClick}
      >
        Ⓧ
      </span>
      <h2 className='Modal-title'>{title}</h2>
      <div className="Modal-content">
        {children}
      </div>
    </div>
  )
}

export default Modal