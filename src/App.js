import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Page-wrapper">
        <button style={{ position: 'sticky', top: '.5em', right: '.5em', marginLeft: 'auto' }} className="Button">
          Open modal
        </button>
        <h2>Articles en vente ici.</h2>
        <div className="Wrapper">
          <div className="Products">
            <div className="Product Row-wrapper">
              <img className="Picture" src={logo} alt="test"/>
              <div className="Product-content Wrapper">
                <h3>Nom de l'article</h3>
                <span style={{ display: 'block', fontSize: '1.8em' }} >Prix €</span>
                <button className="Button">Action</button>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
