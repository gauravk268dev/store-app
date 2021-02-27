import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Shop />
      <Contact />
    </div>
  );
}

export default App;
