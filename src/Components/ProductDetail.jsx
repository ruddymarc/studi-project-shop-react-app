import React from 'react'
import Button from './Button'
import './ProductDetail.css'

/**
 * Show one product
 * @param {*} param0 
 * @returns 
 */
const ProductDetail = ({ name, picture, price, disabled, action, callback }) => {
  return (
    <div className={['Product', disabled ? 'disabled' : null].join(' ')}>
      <img className="Product-picture" src={picture} alt={name} />
      <div className='Product-content'>
        <h3>{name}</h3>
        <span style={{ display: 'block', fontSize: '1.8em' }} >
          {price.toString().slice(0, -2)} €
          <small style={{fontSize: '.6em'}}> {price.toString().slice(-2)}</small>
        </span>
        <Button
          label={action}
          rounded={true}
          color={action.match(/ajouter/i) ? 'green' : 'red'}
          disabled={disabled}
          onClick={callback}
        />
      </div>
    </div>
  )
}

export default ProductDetail