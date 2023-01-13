import React from 'react'
import Button from './Button'
import './Page.css'

/**
 * Show Page wrapper
 * @param {*} param0 
 * @returns 
 */
const Page = ({ title, children, action, callback }) => {
  const btnAction = action ?
    ( <Button label={action} sticky={true} onClick={callback} /> ) :
    null

  return (
    <div className="Page-wrapper">
      {btnAction}
      <h2>{title}</h2>
      <div className="Wrapper">
        {children}
      </div>
    </div>
  )
}

export default Page