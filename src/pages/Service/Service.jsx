import './Service.css';
import dog1 from '../../assets/img/dog_card1.png';
import dog2 from '../../assets/img/dog_card2.png';
import dog3 from '../../assets/img/dog_card3.png';

export function Service() {
  return (
    <main className="service">
      <section className="section_service__hero">
        <div className="service__hero-inner">
          <div className="service__hero-text">
            <h1 className="service__title">LOVE AND ATTENTION</h1>
            <h2 className="service__subtitle">FOR YOUR FURRY FRIENDS</h2>
            <p className="service__desc">
              Welcome to our pet care service, where your pets receive top-notch care and endless love
            </p>
          </div>
        </div>
      </section>

      <section className="section-service_cards">
        <div className="service_cards_inner">
          {/* 1 card */}
          <div className="service_mini_card mini_card_1">
            <div className="service_card_info">
              <h1 className="service_card_title">Physical checkup your pet</h1>
              <p className="service_card_desc_1">
              Regular physical checkups are essen...
            </p>
            <a href=""><button className="service_card_btn">Read More</button></a>
            </div>
            <img src={dog1} alt="" />
          </div>
          {/* 2 card */}
          <div className="service_mini_card mini_card_2">
            <div className="service_card_info">
              <h1 className="service_card_title service_card_title_2">Spa</h1>
              <p className="service_card_desc_2">
              Our pet spa offers a luxurious and relaxing experience for your furry friends. We provide a ran...
            </p>
            <a href=""><button className="service_card_btn">Read More</button></a>
            </div>
            <img src={dog2} alt="" />
          </div>
          {/* 3 card */}
          <div className="service_mini_card mini_card_3">
            <div className="service_card_info">
              <h1 className="service_card_title">Environmental Consulting</h1>
              <p className="service_card_desc_3">
              Environmental consulting involves...
            </p>
            <a href=""><button className="service_card_btn">Read More</button></a>
            </div>
            <img src={dog3} alt="" />
          </div>

        </div>
      </section>
    </main>
  );
}