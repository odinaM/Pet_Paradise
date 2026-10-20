import "./Footer.css";
import footer_image from "../../assets/footer/footer_image.webp";
import footer_logo from "../../assets/footer/footer_logo.svg";
import envelope from "../../assets/footer/Envelope.svg";
import phone from "../../assets/footer/Phone.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__bg"></div>

        <div className="footer__info-block">
          <div className="footer__logo">
            {/* ИСПРАВЛЕНО: Добавлен класс для логотипа, чтобы не селектить через div img */}
            <img src={footer_logo} alt="Cuddle & Care Pets logo" className="footer__logo-img" />
          </div>

          <div className="footer__welcome">
            {/* ИСПРАВЛЕНО: Тегу p задан собственный класс-элемент */}
            <p className="footer__welcome-text">
              Welcome to&nbsp;Cuddle &amp;&nbsp;Care Pets! We&nbsp;provide
              quality pet products, grooming, and care advice for your furry
              friends.
            </p>
          </div>

          <div className="footer__connection">
            <div className="footer__contact-column">
              <div className="footer__contact-item">
                <img src={envelope} alt="" aria-hidden="true" className="footer__contact-icon" />
                <a
                  href="mailto:anhdansgvn@gmail.com"
                  className="footer__contact-link footer__contact-link_truncated"
                >
                  anhdansgvn@gmail.com
                </a>
              </div>
              <div className="footer__contact-item">
                <img src={phone} alt="" aria-hidden="true" className="footer__contact-icon" />
                <a href="tel:+84938772416" className="footer__contact-link">
                  +84938772416
                </a>
              </div>
            </div>

            <div className="footer__contact-column">
              <div className="footer__contact-item">
                <img src={envelope} alt="" aria-hidden="true" className="footer__contact-icon" />
                <a
                  href="mailto:thienphuc093@gmail.com"
                  className="footer__contact-link footer__contact-link_truncated"
                >
                  thienphuc093@gmail.com
                </a>
              </div>
              <div className="footer__contact-item">
                <img src={phone} alt="" aria-hidden="true" className="footer__contact-icon" />
                <a href="tel:+84909403482" className="footer__contact-link">
                  +84909403482
                </a>
              </div>
            </div>
          </div>
        </div>

        <img src={footer_image} alt="Friendly dog looking up" className="footer__image-pic" />

        {/* Последняя колонка (меню) */}
        <div className="footer__menu">
          {/* Первая колонка: Service */}
          <div className="footer__menu-column">
            <h3 className="footer__menu-title">Service</h3>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a href="/service" className="footer__menu-link">
                  Pet care
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/service" className="footer__menu-link">
                  Specialty Program
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/service" className="footer__menu-link">
                  Security Program
                </a>
              </li>
            </ul>
          </div>

          {/* Вторая колонка: Website */}
          <div className="footer__menu-column">
            <h3 className="footer__menu-title">Website</h3>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a href="/" className="footer__menu-link">
                  About
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/service" className="footer__menu-link">
                  Service
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/shop" className="footer__menu-link">
                  Shop
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/contact" className="footer__menu-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
