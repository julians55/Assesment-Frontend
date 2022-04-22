import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
