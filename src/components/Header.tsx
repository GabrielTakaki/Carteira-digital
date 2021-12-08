import React from 'react';
import wallet from '../assets/wallet-gif.gif'

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <section className="header__section">
        <img src={ wallet } className="header__gif" alt="carteira-digital-gif" />
      </section>
    </header>
  );
}

export default Navbar;
