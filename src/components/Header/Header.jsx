import './Header.css';
import logo from '../../assets/img/Logo.png';
import korzina from '../../assets/img/korzina.png';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    // Главный блок «header»
    <header className="header">
      {/* «container» — это глобальный блок сетки. */}
      <div className="container header__container">
        {/* Элемент логотипа */}
        <a href="/" className="header__logo">
          <img src={logo} alt="logo" className="header__logo-img" />
        </a>

        {/* Элемент навигации (контейнер для ссылок) */}
        <nav className="header__nav">
          <NavLink 
            to="/" 
            className={({isActive}) => `header__nav-link ${isActive ? 'header__nav-link_active' : ''}`}
          >
            About
          </NavLink>
          <NavLink 
            to="/service" 
            className={({isActive}) => `header__nav-link ${isActive ? 'header__nav-link_active' : ''}`}
          >
            Service
          </NavLink>
          <NavLink 
            to="/shop" 
            className={({isActive}) => `header__nav-link ${isActive ? 'header__nav-link_active' : ''}`}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `header__nav-link ${isActive ? 'header__nav-link_active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Элемент правой панели */}
        <div className="header__right">
          <button className="header__cart-btn" aria-label="Корзина">
            <img src={korzina} alt="korzina" className="header__cart-icon" />
          </button>
          <a href="/register" className="header__auth-link">Register / Login</a>
        </div>

      </div>
    </header>
  );
}
