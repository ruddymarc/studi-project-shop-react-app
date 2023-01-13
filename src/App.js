import React, {useState} from 'react'
import Page from './Components/Page'
import Modal from './Components/Modal'
import ProductList from './Components/ProductList';
import logo from './logo.svg';
import './App.css';

function App() {
  const [modalDisplayed, setModalDisplayed] = useState(false)
  const toggleModal = ()=> setModalDisplayed(!modalDisplayed)

  return (
    <div className="App">
      <Page title='Articles en vente ici.' action='Open modal' callback={toggleModal}>
        <ProductList />
        <Modal title='Mon panier' displayed={modalDisplayed} closeAction={toggleModal}>
          <div className="Product Row-wrapper">
            <img className="Picture" src={logo} alt="test"/>
            <div className="Product-content Wrapper">
              <h3>Nom de l'article</h3>
              <span style={{ display: 'block', fontSize: '1.8em' }} >Prix €</span>
              <button className="Button">Action</button>
            </div>
          </div>
        </Modal>
      </Page>
    </div>
  );
}

export default App;
