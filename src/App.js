import Page from './Components/Page'
import ProductList from './Components/ProductList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Page title='Articles en vente ici.' action='Open modal'>
        <ProductList />
        <div className="Modal-wrapper disabled">
          <span style={{ position: 'static', top: '.5em', right: '.5em', marginLeft: 'auto' }} className='close'>
            Ⓧ
          </span>
          <h2>Mon panier</h2>
          <div className="Modal-content">
            <div className="Product Row-wrapper">
              <img className="Picture" src={logo} alt="test"/>
              <div className="Product-content Wrapper">
                <h3>Nom de l'article</h3>
                <span style={{ display: 'block', fontSize: '1.8em' }} >Prix €</span>
                <button className="Button">Action</button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}

export default App;
