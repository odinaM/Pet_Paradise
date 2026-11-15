import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/img/Logo.svg";
import korzina from "../../assets/img/korzina.svg";

export function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isAuth, setIsAuth] = useState(false);

  // Функция загрузки корзины (объявлена вне useEffect)
  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:3000/carts/my", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setIsAuth(true);
        // общее количество товаров
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

  // Один useEffect(загрузка и слушатель для корзины): загрузка + подписка на событие
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
        <Link to="/about" className="header__logo">
          <img src={logo} alt="logo" className="header__logo-img" />
        </Link>

        {/* Навигация */}
        <nav className="header__nav">
          <NavLink
            to="/about"
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
            <Link
              to="/profile"
              className="header__profile-btn"
              aria-label="Профиль"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.5816 32.3172C32.964 27.7917 28.9301 24.5467 24.2224 23.0084C26.551 21.6222 28.3602 19.5099 29.3721 16.9959C30.3841 14.4819 30.5428 11.7052 29.8239 9.09232C29.105 6.4794 27.5483 4.1747 25.3928 2.53214C23.2373 0.889584 20.6023 0 17.8923 0C15.1822 0 12.5472 0.889584 10.3917 2.53214C8.23618 4.1747 6.67946 6.4794 5.96059 9.09232C5.24171 11.7052 5.40042 14.4819 6.41235 16.9959C7.42428 19.5099 9.23347 21.6222 11.5621 23.0084C6.85444 24.545 2.82053 27.79 0.202875 32.3172C0.106881 32.4737 0.0432087 32.6479 0.0156152 32.8294C-0.0119784 33.0109 -0.00293437 33.1961 0.0422136 33.3741C0.0873616 33.5521 0.167699 33.7192 0.278486 33.8657C0.389273 34.0121 0.528265 34.1348 0.687262 34.2267C0.846258 34.3185 1.02204 34.3776 1.20423 34.4004C1.38643 34.4232 1.57134 34.4093 1.74807 34.3595C1.9248 34.3096 2.08975 34.2249 2.23321 34.1103C2.37667 33.9957 2.49572 33.8535 2.58334 33.6922C5.82147 28.0959 11.5449 24.7547 17.8923 24.7547C24.2396 24.7547 29.963 28.0959 33.2012 33.6922C33.2888 33.8535 33.4078 33.9957 33.5513 34.1103C33.6947 34.2249 33.8597 34.3096 34.0364 34.3595C34.2132 34.4093 34.3981 34.4232 34.5803 34.4004C34.7625 34.3776 34.9382 34.3185 35.0972 34.2267C35.2562 34.1348 35.3952 34.0121 35.506 33.8657C35.6168 33.7192 35.6971 33.5521 35.7423 33.3741C35.7874 33.1961 35.7965 33.0109 35.7689 32.8294C35.7413 32.6479 35.6776 32.4737 35.5816 32.3172ZM8.26725 12.3797C8.26725 10.476 8.83175 8.61514 9.88935 7.03231C10.947 5.44949 12.4502 4.21583 14.2089 3.48733C15.9677 2.75884 17.9029 2.56823 19.77 2.93962C21.6371 3.311 23.3521 4.22769 24.6982 5.57377C26.0442 6.91985 26.9609 8.63486 27.3323 10.5019C27.7037 12.369 27.5131 14.3043 26.7846 16.063C26.0561 17.8217 24.8224 19.325 23.2396 20.3826C21.6568 21.4402 19.7959 22.0047 17.8923 22.0047C15.3404 22.0019 12.8938 20.987 11.0894 19.1826C9.28492 17.3781 8.26998 14.9315 8.26725 12.3797Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          ) : (
            <div className="header__auth-group">
              <Link to="/register" className="header__auth-link">
                Register
              </Link>
              <span className="header__auth-divider"> / </span>
              <Link to="/login" className="header__auth-link">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
