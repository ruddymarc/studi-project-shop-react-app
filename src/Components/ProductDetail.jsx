import React from 'react'

/**
 * Show one product
 * @param {*} param0 
 * @returns 
 */
const ProductDetail = ({ name, picture, price, disabled, action, callback }) => {
  const  productPicture = picture ?
    <img className="Picture" src={picture} alt={name} /> :
    null

  return (
    <div className={['Product', 'Row-wrapper', disabled ? 'disabled' : null].join(' ')}>
      {productPicture}
      <div className={['Product-content', 'Wrapper'].join(' ')}>
        <h3>{name}</h3>
        <span style={{ display: 'block', fontSize: '1.8em' }} >{price} €</span>
        <button className="Button" disabled={disabled} onClick={callback}>{action}</button>
      </div>
    </div>
  )
}

export default ProductDetail