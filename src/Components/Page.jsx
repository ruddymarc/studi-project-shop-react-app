import React from 'react'
import './Page.css'

/**
 * Show Page wrapper
 * @param {*} param0 
 * @returns 
 */
const Page = ({ title, children }) => {
  return (
    <div className="Page-wrapper">
      <h2>{title}</h2>
      <div className="Wrapper">
        {children}
      </div>
    </div>
  )
}

export default Page