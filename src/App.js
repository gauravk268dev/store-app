import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App jumbotron">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact"component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
