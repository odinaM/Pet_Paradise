import "./Footer.css";
import footer_image from "../../assets/footer/footer_image.webp";
import footer_logo from "../../assets/footer/footer_logo.svg";
import envelope from "../../assets/footer/Envelope.svg";
import phone from "../../assets/footer/Phone.svg";

export function Footer() {
  return (
    <footer className="footer">
      <section className="footer_container">
        <section className="footer_bg"></section>
        <section className="footer_info-block">
          <div className="footer_logo">
            <img src={footer_logo} alt="logo" />
          </div>
          <div className="footer_welcom">
            <p>
              Welcome to&nbsp;Cuddle &amp;&nbsp;Care Pets! We&nbsp;provide
              quality pet products, grooming, and care advice for your furry
              friends.
            </p>
          </div>
          <div className="footer_connection">
            {/* левая колонка */}
            <div className="footer-contact-columns">
              {/* почта */}
              <div className="footer-contact-item">
                <img src={envelope} alt="envelope" />
                <a
                  href="mailto:anhdansgvn@gmail.com"
                  className="truncated-email"
                >
                  anhdansgvn@gmail.com
                </a>
              </div>
              {/* телефон */}
              <div className="footer-contact-item">
                <img src={phone} alt="phone" />
                <a href="tel:+84938772416">+84938772416</a>
              </div>
            </div>

            {/* правая колонка */}
            <div className="footer-contact-columns">
              {/* почта */}
              <div className="footer-contact-item">
                <img src={envelope} alt="envelope" />
                <a
                  href="mailto:thienphuc093@gmail.com"
                  className="truncated-email"
                >
                  thienphuc093@gmail.com
                </a>
              </div>
              {/* телефон */}
              <div className="footer-contact-item">
                <img src={phone} alt="phone" />
                <a href="tel:+84909403482">+84909403482</a>
              </div>
            </div>
          </div>
        </section>
        <section className="footer_image">
          <img src={footer_image} alt="dog" />
        </section>
        <section></section>
      </section>
    </footer>
  );
}
