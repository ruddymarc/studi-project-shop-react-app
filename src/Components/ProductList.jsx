import ProductDetail from './ProductDetail'
import Tabs from './Tabs'
import React, {useState} from 'react'

/**
 * List all products and their first action
 * @returns 
 */
const ProductList = ({ addOnCart, alreadyInCart }) => {
  // Returns a random integer from 100 to 10000:
  const getRandomInt = () => Math.floor(Math.random() * (10000 - 100 + 1) ) + 100
  const getRandomSmallInt = () => Math.floor(Math.random() * 5)
  const [products] = useState([
    { id: Math.random().toString(), product: require('../media/shoes.jpg'), name: 'Une paire de chausure', price: getRandomInt() },
    { id: Math.random().toString(), product: require('../media/camera.jpg'), name: 'Appareil photo', price: getRandomInt() },
    { id: Math.random().toString(), product: require('../media/watch.jpg'), name: 'Une monte connecter', price: getRandomInt() },
  ])

  return (
    <div className="Products">
      { products.map(product => (
        <div key={product.id} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1em'
        }}>
          <ProductDetail
            picture={product.picture}
            name={product.name}
            price={product.price}
            disabled={alreadyInCart(product)}
            action='Ajouter au panier'
            callback={() => { addOnCart(product) }}
          />
          <Tabs tabs={[
            { id: 'description', label: 'Description' },
            { id: 'info', label: 'information complémentaire' },
            { id: 'avis', label: 'Avis' },
          ]}>
            <div id="description">
              <strong>{product.name}</strong> is simply dummy text of the printing and typesetting industry. <i>Lorem Ipsum</i> has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div id="info">
              <h3>Why do we use it?</h3>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'
              </p>
              <h3>Where does it come from?</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
              </p>
            </div>
            <div id="avis">
              { [...Array(getRandomSmallInt()).keys()].map(key => (
                <div className="Comment-wrapper">
                  <img src={require('../media/admin-users-svgrepo-com.svg')} alt='user-profile' />
                  <div className="Comment-content">
                    <h4>Avis : {[...Array(getRandomSmallInt()).keys()].map(key => '❤️').join(' ')}</h4>
                    <p>qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                  </div>
                </div>
              )) }
            </div>
          </Tabs>
        </div>
      )) }
    </div>
  )
}

export default ProductList