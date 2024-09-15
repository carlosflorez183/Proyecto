import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsGrid />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
