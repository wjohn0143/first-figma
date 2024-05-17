import logo from './logo.svg';
import './App.css';
import 'antd';
import '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
