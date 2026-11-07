import { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
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
import pet_card1 from "../../assets/shop/shop_card1.svg";
import pet_card2 from "../../assets/shop/shop_card2.svg";
import pet_card3 from "../../assets/shop/shop_card3.svg";
import bg_pet from "../../assets/shop/bg_pet.webp";
import summer_pet from "../../assets/shop/summer_pet.webp";
import food_dog from "../../assets/shop/food_dog.webp";

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
            The most popular product
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

      <section className="pet-nutrition">
        <div className="pet-nutrition__header">
          <h2 className="pet-nutrition__title pet-nutrition__title--main">
            Tailored Nutrition
            <img src={paw} alt="little paw" className="pet-nutrition__icon" />
          </h2>
          <p className="pet-nutrition__title pet-nutrition__title--sub">
            for Your Pet's Health
          </p>
        </div>

        {/* секция с карточками */}
        <div className="pet-nutrition__grid">
          {/* карточка 1 */}
          <div className="pet-nutrition__card card">
            <div className="card__icon-wrapper">
              <img src={pet_card1} alt="love" />
            </div>
            <h3 className="card__title">Nutrition and Health</h3>
            <p className="card__text">
              Proper nutrition is&nbsp;key to&nbsp;your pet&rsquo;s health,
              supporting growth, energy, and overall well-being.
            </p>
          </div>
          {/* карточка 2 */}
          <div className="pet-nutrition__card card">
            <div className="card__icon-wrapper">
              <img src={pet_card2} alt="love" />
            </div>
            <h3 className="card__title">Custom Diets</h3>
            <p className="card__text">
              Each pet has unique dietary needs. Tailoring their diet ensures
              they get essential nutrients.
            </p>
          </div>
          {/* карточка 3 */}
          <div className="pet-nutrition__card card">
            <div className="card__icon-wrapper">
              <img src={pet_card3} alt="love" />
            </div>
            <h3 className="card__title">Expert Guidance</h3>
            <p className="card__text">
              Professional advice is&nbsp;crucial for managing your pet&rsquo;s
              diet, ensuring they stay healthy and thrive.
            </p>
          </div>
        </div>
        {/* сложная картинка */}
        <div className="summer-sale">
          <div className="summer-sale__pets">
            <img src={bg_pet} alt="pet cat dog" className="summer-sale__pet" />
          </div>

          <div className="summer-sale__bg">
            <img
              src={summer_pet}
              alt="summer_pet poster"
              className="summer-sale__bg-img"
            />
          </div>
        </div>
      </section>

      <section className="pet-food-products">
        {/* первый блок с картинками */}
        <div className="pet-food-product">
          <div className="pet-food-product__bg">
            {/* собака */}
            <img
              src={food_dog}
              alt="Summer sale dog"
              className="pet-food-product__dog"
            />
            {/* текст */}
            <div className="pet-food-product__info">
              <h3 className="pet-food-product__title">Pet food products</h3>
              <p className="pet-food-product__text">
                Buy products for free pet checkup
              </p>
            </div>
            {/* корм */}
            <div className="pet-food-product__foods">
              <img
                src={big_pr5}
                alt="Food 1"
                className="pet-food-product__food-img pet-food-product__food-img--back"
              />
              <img
                src={big_pr4}
                alt="Food 2"
                className="pet-food-product__food-img pet-food-product__food-img--front"
              />
            </div>
          </div>
        </div>
      </section>
      {/* товары из бэка */}
      <section className="shop__dynamic-products">
        <ProductList />
      </section>
    </main>
  );
}
