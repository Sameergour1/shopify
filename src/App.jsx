import  { useState } from 'react';
import FAQ from '../src/components/FAQ'; 
import Footer from '../src/components/Footer'; 
import Header from '../src/components/Header'; 
import ProductOverview from '../src/components/ProductOverview';
import Login from '../src/components/LoginPage';
import Cart from '../src/components/CartPage';

import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCartClick = () => setShowCart(true);
  const handleLoginClick = () => setShowLogin(true);

  const closeModals = () => {
    setShowCart(false);
    setShowLogin(false);
  };

  return (
    <>
      <Header onCartClick={handleCartClick} onLoginClick={handleLoginClick} />
      
      <ProductOverview onBuyNowClick={handleCartClick} />

      <section className="faq bg-white py-8">
        <div className="container mx-auto px-4">
          <FAQ />
        </div>
      </section>
      
      {showCart && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Cart />
            <button className="close-modal" onClick={closeModals}>Close</button>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Login />
            <button className="close-modal" onClick={closeModals}>Close</button>
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <Footer />         
        </div>
      </footer>
    </>
  );
}

export default App;
