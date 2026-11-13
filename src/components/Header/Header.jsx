import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/img/Logo.svg";
import korzina from "../../assets/img/korzina.svg";

export function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isAuth, setIsAuth] = useState(false);

  // Функция загрузки корзины (объявлена ВНЕ useEffect)
  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:3000/carts/my", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setIsAuth(true);
        // Считаем общее количество товаров (а не позиций)
        const totalItems =
          data.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
        setCartCount(totalItems);
      } else if (res.status === 401) {
        setIsAuth(false);
        setCartCount(0);
      }
    } catch (err) {
      console.error("Ошибка загрузки корзины в хедере:", err);
    }
  };

  // Один useEffect: загрузка + подписка на событие
  useEffect(() => {
    fetchCart();

    const handleCartUpdate = () => {
      fetchCart();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  return (
    <header className="header">
      <div className="container header__container">
        {/* Логотип */}
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" className="header__logo-img" />
        </Link>

        {/* Навигация */}
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? "header__nav-link_active" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? "header__nav-link_active" : ""}`
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? "header__nav-link_active" : ""}`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? "header__nav-link_active" : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Правая панель */}
        <div className="header__right">
          <Link to="/cart" className="header__cart-btn" aria-label="Корзина">
            <img src={korzina} alt="korzina" className="header__cart-icon" />
            {cartCount > 0 && (
              <span className="header__cart-badge">{cartCount}</span>
            )}
          </Link>

          {isAuth ? (
            <Link to="/profile" className="header__auth-link">
              Профиль
            </Link>
          ) : (
            <Link to="/login" className="header__auth-link">
              Register / Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
