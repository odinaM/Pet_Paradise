import './Header.css';
import logo from './img/Logo.png';
import korzina from './img/korzina.png';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <div className="container">

        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <nav className="nav">
          <NavLink to="/"        className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/service" className={({isActive}) => isActive ? 'active' : ''}>Service</NavLink>
          <NavLink to="/shop"    className={({isActive}) => isActive ? 'active' : ''}>Shop</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>

        <div className="right">
          <button className="cart-btn" aria-label="Корзина">
            <img src={korzina} alt="korzina" />
          </button>
          <a href="/register" className="auth-link">Register / Login</a>
        </div>

      </div>
    </header>
  );
}