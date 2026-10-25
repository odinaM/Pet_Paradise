import { useState } from "react";
import "./Shop.css";
import pr1 from "../../assets/shop/shop_product1.webp";
import pr2 from "../../assets/shop/shop_product2.webp";
import pr3 from "../../assets/shop/shop_product3.webp";
import pr4 from "../../assets/shop/shop_product4.webp";
import pr5 from "../../assets/shop/shop_product5.webp";
import paw from "../../assets/shop/paw.svg";
import big_pr1 from "../../assets/shop/big_pr1.webp";
import big_pr2 from "../../assets/shop/big_pr2.webp";
import big_pr3 from "../../assets/shop/big_pr3.webp";
import big_pr4 from "../../assets/shop/big_pr4.webp";
import big_pr5 from "../../assets/shop/big_pr5.webp";

const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export function Shop() {
  const products = [
    {
      id: 1,
      title: "FILLET 'O' LAKES - KIT CAT",
      img: pr1,
      BigImg: big_pr1,
    },
    {
      id: 2,
      title: "Encore - Cat Food",
      img: pr2,
      BigImg: big_pr2,
    },
    {
      id: 3,
      title: "WELLNESS - SIGNATURE SELECT TM",
      img: pr3,
      BigImg: big_pr3,
    },
    {
      id: 4,
      title: "ROYAL CANIN - CARE DIGEST SENSITIVE",
      img: pr4,
      BigImg: big_pr4,
    },
    {
      id: 5,
      title: "ROYAL CANIN - CARE DIGEST SENSITIVE",
      img: pr5,
      BigImg: big_pr5,
    },
  ];

  // индекс активного товара
  const [activeIndex, setActiveIndex] = useState(2);
  const activeProduct = products[activeIndex];

  const prev = () => {
    setActiveIndex((i) => (i - 1 + products.length) % products.length);
  };
  const next = () => {
    setActiveIndex((i) => (i + 1) % products.length);
  };

  return (
    <main className="shop">
      {/* секция с фоном и продуктом */}
      <section className="shop__bg">
        <div className="shop__info">
          <h1 className="shop__title">
            The most popular products{" "}
            <img src={paw} alt="little paw" className="shop__paw-icon" />
          </h1>
          <p className="shop__text">
            Discover our top-rated products, loved for their quality and
            performance. From tech gadgets to fashion pieces, these bestsellers
            are in high demand. Don't miss out on what everyone is talking
            about!
          </p>
        </div>

        {/* Большая картинка активного товара над аркой */}
        <img
          key={activeProduct.id}
          src={activeProduct.BigImg || activeProduct.img}
          alt={activeProduct.title}
          className="shop__hero-main-image"
        />
      </section>

      <section className="shop__catalog">
        {/* Заголовок с навигацией */}
        <div className="shop__catalog-header">
          <button
            className="shop__nav-btn"
            aria-label="Previous"
            onClick={prev}
          >
            <ArrowLeft />
          </button>
          <h2>{activeProduct.title}</h2>
          <button className="shop__nav-btn" aria-label="Next" onClick={next}>
            <ArrowRight />
          </button>
        </div>

        {/* Сетка товаров */}
        <div className="shop__grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => setActiveIndex(index)}
              className={`shop__card ${index === activeIndex ? "shop__card--active" : ""}`}
            >
              <div className="shop__card-image-wrap">
                <img src={product.img} alt={product.title} />
              </div>
              <p className="shop__card-title">{product.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
