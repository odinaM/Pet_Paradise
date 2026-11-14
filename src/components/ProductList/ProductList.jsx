import React, { useEffect, useState } from "react";
import "../ProductList/ProductList.css";
import star from "../../assets/productlist/star.svg";
import paw from "../../assets/shop/paw.svg";

const ProductList = ({ categoryId, title = "Pet food" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) throw new Error("Ошибка при загрузке товаров");

        let data = await response.json();

        if (categoryId) {
          if (Array.isArray(categoryId)) {
            data = data.filter((product) =>
              categoryId.includes(product.categoryId),
            );
          } else {
            data = data.filter((product) => product.categoryId === categoryId);
          }
        }

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  const addToCart = async (productId) => {
    const res = await fetch("http://localhost:3000/cart-items", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity: 1 }),
    });
    const data = await res.json();
    if (!res.ok) {
      if (res.status === 401) {
        alert("Войдите, чтобы добавить товар в корзину");
        return;
      }
      alert(data?.error || "Ошибка");
      return;
    }
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="products__container">
      <div className="products__header">
        <h3 className="products__title">{title}</h3>
        <img src={paw} alt="little paw" className="products__paw-icon" />
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>

            <div className="product-content">
              <h3 className="product__title">{product.name}</h3>

              <div className="product__rating">
                <img src={star} alt="star gold" className="star" />
                <span className="prodict__rating-text">
                  {product.rating.toFixed(1)}
                </span>
                <span className="prodict__rating-text">
                  ({product.soldCount} Sold)
                </span>
              </div>

              <div className="product-price__block">
                <span className="product-price__new">
                  ${product.priceAfterDiscount}
                </span>
                <span className="product-price__old">
                  ${product.priceBeforeDiscount}
                </span>
              </div>

              <div className="product-actions">
                <button className="product-buy-btn">Buy Now</button>

                <button
                  className="product-cart-btn"
                  aria-label="Добавить в корзину"
                  onClick={() => addToCart(product.id)}
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
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
