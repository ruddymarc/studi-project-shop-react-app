import Page from './Components/Page'
import Modal from './Components/Modal'
import ProductList from './Components/ProductList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Page title='Articles en vente ici.' action='Open modal'>
        <ProductList />
        <Modal title='Mon panier'>
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
