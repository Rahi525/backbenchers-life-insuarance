import React from 'react';
import './Header.css'

const Header = () => {
   return (
      <header id="header">
         <div id="header-container">
            <h2>Backbenchers life insuarance</h2>
            <p id="title">An insuarance is managing by <span>Backbenchers</span></p>
            <h2>Our expected monthly deposit is <span>20000 Taka</span></h2>
         </div>
      </header>
   );
};

export default Header;