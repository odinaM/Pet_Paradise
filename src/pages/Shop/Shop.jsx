import "./Shop.css";
import pr1 from "../../assets/shop/shop_product1.webp";
import pr2 from "../../assets/shop/shop_product2.webp";
import pr3 from "../../assets/shop/shop_product3.webp";
import pr4 from "../../assets/shop/shop_product4.webp";
import pr5 from "../../assets/shop/shop_product5.webp";
import paw from "../../assets/shop/paw.svg";

// SVG-иконки для стрелок
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
  // Массив продуктов
  const products = [
    {
      id: 1,
      title: "FILLET &lsquo;O&rsquo; LAKES&nbsp;&mdash; KIT CAT",
      img: pr1,
    },
    { id: 2, title: "Encore - Cat Food", img: pr2 },
    {
      id: 3,
      title: "WELLNESS&nbsp;&mdash; SIGNATURE SELECT&nbsp;TM",
      img: pr3,
      active: true,
    }, // Активный элемент
    {
      id: 4,
      title: "ROYAL CANIN&nbsp;&mdash; CARE DIGEST SENSITIVE",
      img: pr4,
    },
    {
      id: 5,
      title: "ROYAL CANIN&nbsp;&mdash; CARE DIGEST SENSITIVE",
      img: pr5,
    },
  ];

  return (
    <main className="shop">
      <section className="shop__bg">
        {/* 1. Блок с текстом */}
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
      </section>

      {/* --- НИЖНЯЯ СЕКЦИЯ (Белая) --- */}
      <section className="shop__catalog">
        {/* Заголовок с навигацией */}
        <div className="shop__catalog-header">
          <button className="shop__nav-btn" aria-label="Previous">
            <ArrowLeft />
          </button>
          <h2>WELLNESS - SIGNATURE SELECT TM</h2>
          <button className="shop__nav-btn" aria-label="Next">
            <ArrowRight />
          </button>
        </div>

        {/* Сетка товаров */}
        <div className="shop__grid">
          {products.map((product) => (
            <div
              key={product.id}
              className={`shop__card ${product.active ? "shop__card--active" : ""}`}
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
