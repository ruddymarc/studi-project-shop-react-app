import React, {useState} from 'react'
import Page from './Components/Page'
import Modal from './Components/Modal'
import Cart from './Components/Cart'
import ProductList from './Components/ProductList';
import './App.css';

function App() {
  const [modalDisplayed, setModalDisplayed] = useState(false)
  const toggleModal = ()=> setModalDisplayed(!modalDisplayed)

  const [cart, setCart] = useState([])
  /**
   * Chek if item already in cart
   * @param {Object} item
   * @returns
   */
  const alreadyInCart = (item) => cart.find(cartItem => cartItem.id === item.id)
  /**
   * Add item to cart if not already there
   * @param {Object} item
   */
  const buyItem = (item) => {
    if (!alreadyInCart(item)) {
      console.log('Ajouter : ', item)
      setCart([...cart, item])
    }
  }
  /**
   * Remove item from cart
   * @param {Object} item
   */
  const removeItem = (item) => {
    console.log('Supprimer : ', item)
    setCart(cart.filter(cartItem => cartItem.id !== item.id))
  }
  return (
    <div className="App">
      <Page title='Articles en vente ici.' action='Open modal' callback={toggleModal}>
        <ProductList addOnCart={buyItem} />
        <Modal title='Mon panier' displayed={modalDisplayed} closeAction={toggleModal}>
          <Cart products={cart} removeOnCart={removeItem} />
        </Modal>
      </Page>
    </div>
  );
}

export default App;
