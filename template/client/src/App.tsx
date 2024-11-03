import React from 'react';
import './App.scss';
import { CartProvider } from './components/Context/CartContext';
import NavBar from './components/NavBar/Navbar';
import LeftPannel from './components/LeftPannel/LeftPannel';
import RightPannel from './components/RightPannel/RightPannel';

function App() {
    return (
      <CartProvider>
      <main className="home-main">
        <NavBar />
        <div className="content-container">
          <div className="panel-left">
            <LeftPannel />
          </div>
          <div className="panel-right">
            <RightPannel />
          </div>
        </div>
      </main>
      </CartProvider>
    );
  }
  

export default App;
