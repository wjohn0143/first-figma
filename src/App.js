import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
