import ProductDetail from './ProductDetail'
import React, {useState} from 'react'

/**
 * List all products and their first action
 * @returns 
 */
const ProductList = () => {
  // Returns a random integer from 100 to 10000:
  const getRandomInt = () => Math.floor(Math.random() * (10000 - 100 + 1) ) + 100
  const [products] = useState([
    { id: Math.random().toString(), product: undefined, name: 'Une paire de chausure', price: getRandomInt() },
    { id: Math.random().toString(), product: undefined, name: 'Appareil photo', price: getRandomInt() },
    { id: Math.random().toString(), product: undefined, name: 'Une monte connecter', price: getRandomInt() },
  ])

  return (
    <div className="Products">
      { products.map(product => (
        <ProductDetail
          key={product.id}
          picture={product.picture}
          name={product.name}
          price={product.price}
          action='Ajouter au panier'
        />
      )) }
    </div>
  )
}

export default ProductList