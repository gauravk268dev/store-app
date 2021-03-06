import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ProductView from "./components/ProductView";
import products from "./components/data/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import db from './components/firebase/config';

function App() {
  const [cartItems, addToCart] = useState([...products]);
  const [items, setItems] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
                setItems={setItems}
                addToCart={addToCart}
                items={items}
                cartItems={cartItems}
              />
            )}
          />
          <Route path="/about" component={() => <About />} />
          <Route
            path="/cart"
            component={() => <Cart cartItems={cartItems} />}
          />
          <Route path="/contact" component={() => <Contact />} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = ({ setItems, addToCart, items, cartItems }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <ProductView
        setItems={setItems}
        addToCart={addToCart}
        items={items}
        cartItems={cartItems}
      />
    </div>
  );
};

export default App;
