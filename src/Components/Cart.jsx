import ProductDetail from './ProductDetail'
import React from 'react'

/**
 * List products in cart and their remove action
 * @param {*} param0
 * @returns
 */
const Cart = ({ products, removeOnCart }) => {
  return (
    <div className="Cart">
      { products.map(product => (
        <ProductDetail
          key={product.id}
          picture={product.picture}
          name={product.name}
          price={product.price}
          action='Supprimer du panier'
          callback={() => { removeOnCart(product) }}
        />
      ))}
    </div>
  )
}

export default Cart