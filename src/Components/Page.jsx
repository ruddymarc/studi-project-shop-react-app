import React from 'react'

/**
 * Show Page wrapper
 * @param {*} param0 
 * @returns 
 */
const Page = ({ title, children, action, callback }) => {
  const btnAction = action ?
    ( <button 
        className="Button"
        style={{ position: 'sticky', top: '.5em', right: '.5em', marginLeft: 'auto' }} 
        onClick={callback}
      >
        {action}
      </button> ) :
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