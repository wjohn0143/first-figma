import logo from './logo.svg';
import './App.css';
import 'antd';
import '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
