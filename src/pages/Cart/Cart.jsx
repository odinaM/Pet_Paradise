import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../../api";
import "./Cart.css";

export function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notAuth, setNotAuth] = useState(false);

  const loadCart = async () => {
    setLoading(true);
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

  const changeQuantity = async (itemId, quantity) => {
    if (quantity < 1) return;
    const { ok, data } = await apiFetch(`/cart-items/${itemId}`, {
      method: "PATCH",
      body: JSON.stringify({ quantity }),
    });
    if (!ok) {
      alert(data?.error || "Не удалось изменить количество");
      return;
    }
    await loadCart();
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = async (itemId) => {
    const { ok, data } = await apiFetch(`/cart-items/${itemId}`, {
      method: "DELETE",
    });
    if (!ok) {
      alert(data?.error || "Не удалось удалить товар");
      return;
    }
    await loadCart();
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const clearCart = async () => {
    if (!window.confirm("Очистить корзину?")) return;
    const { ok, data } = await apiFetch("/cart-items", { method: "DELETE" });
    if (!ok) {
      alert(data?.error || "Не удалось очистить корзину");
      return;
    }
    await loadCart();
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // 401 — не залогинен
  if (notAuth) {
    return (
      <main className="cart">
        <h1 className="cart__title">Корзина</h1>
        <p className="cart__empty">
          Чтобы увидеть корзину, <Link to="/login">войдите</Link>.
        </p>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="cart">
        <h1 className="cart__title">Корзина</h1>
        <p className="cart__empty">Загрузка...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="cart">
        <h1 className="cart__title">Корзина</h1>
        <p className="cart__empty">{error}</p>
        <button className="cart__btn" onClick={loadCart}>
          Повторить
        </button>
      </main>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <main className="cart">
        <h1 className="cart__title">Корзина</h1>
        <p className="cart__empty">Корзина пуста.</p>
        <Link to="/shop" className="cart__btn">
          Перейти в магазин
        </Link>
      </main>
    );
  }

  return (
    <main className="cart">
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
                <p className="cart__item-brand">{item.product.brand}</p>
                <h3 className="cart__item-name">{item.product.name}</h3>

                <div className="cart__item-prices">
                  <span className="cart__item-price">{price.toFixed(2)} ₽</span>
                  {oldPrice > price && (
                    <span className="cart__item-old-price">
                      {oldPrice.toFixed(2)} ₽
                    </span>
                  )}
                </div>

                <p className="cart__item-stock">
                  В наличии: {item.product.quantity} шт.
                </p>
              </div>

              <div className="cart__item-controls">
                <div className="cart__quantity">
                  <button
                    onClick={() => changeQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => changeQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= item.product.quantity}
                  >
                    +
                  </button>
                </div>

                <p className="cart__item-sum">
                  {(price * item.quantity).toFixed(2)} ₽
                </p>

                <button
                  className="cart__remove"
                  onClick={() => removeItem(item.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart__footer">
        <div className="cart__total">
          Итого: <span>{cart.total.toFixed(2)} ₽</span>
        </div>

        <div className="cart__actions">
          <button className="cart__btn cart__btn--clear" onClick={clearCart}>
            Очистить корзину
          </button>
          <button
            className="cart__btn cart__btn--checkout"
            onClick={() => navigate("/checkout")}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </main>
  );
}
