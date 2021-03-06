import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ProductView from "./components/ProductView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import db from './components/firebase/config';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ProductView />
    </div>
  );
};

export default App;
