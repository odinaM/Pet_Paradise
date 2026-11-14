import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../../api";
import "./Cart.css";
import telega from "../../assets/cart/telegadog.png";

export function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notAuth, setNotAuth] = useState(false);

  // Загрузка корзины
  const loadCart = async (showLoader = true) => {
    if (showLoader) setLoading(true);
    setError(null);
    setNotAuth(false);

    const { ok, status, data } = await apiFetch("/carts/my");

    if (status === 401) {
      setNotAuth(true);
      setLoading(false);
      return;
    }
    if (!ok) {
      setError(data?.error || "Не удалось загрузить корзину");
      setLoading(false);
      return;
    }

    setCart(data);
    setLoading(false);
  };

  useEffect(() => {
    loadCart();
  }, []);

  // изменение количества (Оптимистичное)
  const changeQuantity = async (itemId, quantity) => {
    if (quantity < 1) return;

    // 1. Мгновенно обновляем экран
    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item,
      );
      const newTotal = newItems.reduce(
        (sum, item) =>
          sum + Number(item.product.priceAfterDiscount) * item.quantity,
        0,
      );
      return { ...prevCart, items: newItems, total: newTotal };
    });

    //  запрос на сервер
    const { ok, data } = await apiFetch(`/cart-items/${itemId}`, {
      method: "PATCH",
      body: JSON.stringify({ quantity }),
    });

    // Если ошибка — откатываем назад
    if (!ok) {
      alert(data?.error || "Не удалось изменить количество");
      loadCart(false);
    } else {
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  // удаление товара (Оптимистичное)
  const removeItem = async (itemId) => {
    // Мгновенно убираем с экрана
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.id !== itemId);
      const newTotal = newItems.reduce(
        (sum, item) =>
          sum + Number(item.product.priceAfterDiscount) * item.quantity,
        0,
      );
      return { ...prevCart, items: newItems, total: newTotal };
    });

    // Отправляем на сервер
    const { ok, data } = await apiFetch(`/cart-items/${itemId}`, {
      method: "DELETE",
    });

    // Если ошибка — возвращаем
    if (!ok) {
      alert(data?.error || "Не удалось удалить товар");
      loadCart(false);
    } else {
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  //очистка корзины
  const clearCart = async () => {
    if (!window.confirm("Очистить корзину?")) return;

    // мгновенная очистка экрана
    setCart((prevCart) => ({ ...prevCart, items: [], total: 0 }));

    const { ok, data } = await apiFetch("/cart-items", { method: "DELETE" });
    if (!ok) {
      alert(data?.error || "Не удалось очистить корзину");
      loadCart(false);
    } else {
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  if (notAuth) {
    return (
      <main className="cart-page">
        <div className="cart">
          <h1 className="cart__title">Корзина</h1>
          <p className="cart__empty">
            Чтобы увидеть корзину, <Link to="/login">войдите</Link>.
          </p>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="cart-page">
        <div className="cart">
          <h1 className="cart__title">Корзина</h1>
          <p className="cart__empty">Загрузка...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="cart-page">
        <div className="cart">
          <h1 className="cart__title">Корзина</h1>
          <p className="cart__empty">{error}</p>
          <button
            className="cart__btn"
            onClick={() => loadCart(true)}
            type="button"
          >
            Повторить
          </button>
        </div>
      </main>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart">
          <h1 className="cart__title">Корзина</h1>

          <div className="cart__empty-state">
            <div className="cart__empty-image">
              <img src={telega} alt="" />
            </div>

            <p className="cart__empty-text">Корзина ждёт товаров</p>

            <Link to="/shop" className="cart__btn-empty">
              За покупками
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart">
        <h1 className="cart__title">Корзина</h1>

        <div className="cart__list">
          {cart.items.map((item) => {
            const price = Number(item.product.priceAfterDiscount);
            const oldPrice = Number(item.product.priceBeforeDiscount);

            return (
              <div key={item.id} className="cart__item">
                <div className="cart__item-image">
                  <img
                    src={item.product.image || ""}
                    alt={item.product.name}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>

                <div className="cart__item-info">
                  <h3 className="cart__item-name">{item.product.name}</h3>
                  <p className="cart__item-stock">
                    In stock: {item.product.quantity} pcs.
                  </p>
                </div>

                <div className="cart__item-prices">
                  <span className="cart__item-price">{price.toFixed(2)} $</span>
                  {oldPrice > price && (
                    <span className="cart__item-old-price">
                      {oldPrice.toFixed(2)} $
                    </span>
                  )}
                </div>

                <div className="cart__quantity">
                  <button
                    type="button"
                    onClick={() => changeQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => changeQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= item.product.quantity}
                  >
                    +
                  </button>
                </div>

                <p className="cart__item-sum">
                  {(price * item.quantity).toFixed(2)} $
                </p>

                <button
                  type="button"
                  className="cart__remove"
                  onClick={() => removeItem(item.id)}
                  aria-label="Удалить товар"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        <div className="cart__footer">
          <div className="cart__total">
            Итого: <span>{cart.total.toFixed(2)} $</span>
          </div>

          <div className="cart__actions">
            <button
              type="button"
              className="cart__btn cart__btn--clear"
              onClick={clearCart}
            >
              Очистить корзину
            </button>
            <button
              type="button"
              className="cart__btn cart__btn--checkout"
              onClick={() => navigate("/checkout")}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
