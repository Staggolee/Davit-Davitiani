import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const Index = () =>{
  return(
    <>
    <h1>index page</h1>
    <p>Lorem impusm</p>
    </>
  );
}

// match, history, location
const Product = ({ match }) => {
  return(
    <div>
      <h2>Category {match.params.category.toUpperCase()}</h2>
    </div>
  )
}

const Products = ({ match }) =>{
  return(
    <>
    <h1>product page</h1>
    <p>Lorem impusm</p>
    <nav>
          <ul>
            <li><Link to={`${match.url}/mobiles`}>Mobile phone</Link></li>
            <li><Link to={`${match.url}/leptops`}>Laptops</Link></li>
            <li><Link to={`${match.url}/cameras`}>Cameras</Link></li>
          </ul>
        </nav>

        <Route path ={`${match.url}/:category`} component={Product}/>
        <Route path ={`${match.url}`} exact render={ () => {
          return(
            <div>
              <h2>Select Product Category</h2>
            </div>
          )
        }}/>
        
    </>
  );
}

const Portfolio = () =>{
  return(
    <>
    <h1>portfolio page</h1>
    <p>Lorem impusm</p>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>

        <Route path ="/" component={Index} exact/>
        <Route path ="/products" component={Products}/>
        <Route path ="/portfolio" component={Portfolio}/>
    </div>
      </Router>
    );
  }
}

export default App;
