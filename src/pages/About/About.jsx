import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./About.css";
import union from '../../assets/img/union.png';
import baground from '../../assets/img/Background_about_section2.png';
import dog1 from '../../assets/img/dog_card1.png';
import dog2 from '../../assets/img/dog_card2.png';
import dogHelp1 from '../../assets/img/dog_help1.png';
import dogHelp2 from '../../assets/img/dog_help2.png';

const servicesData = [
  {
      id: 1,
      title: 'Physical checkup your pet',
      shortDesc: 'Regular physical checkups are essen...',
      fullDesc: "Regular physical checkups are essential for maintaining your pet's health and well-being. Our experienced veterinarians conduct thorough examinations to assess your pet's overall health, detect any potential issues, and provide preventative care. The checkup includes a review of your pet's medical history, a physical examination, and necessary diagnostic tests. We offer personalized advice and treatment plans to keep your pet healthy and happy, ensuring they receive the best possible care.",
      imgCard: dog1,
      imgModal: dogHelp1,
      cardClass: 'mini_card_1',
      titleClass: 'service_card_title',
      descClass: 'service_card_desc_1',
    },
    {
      id: 2,
      title: 'Spa',
      shortDesc: 'Our pet spa offers a luxurious and relaxing ex...',
      fullDesc: "Our pet spa offers a luxurious and relaxing experience for your furry friends. We provide a range of grooming services, including baths, haircuts, nail trimming, and ear cleaning, all designed to keep your pet looking and feeling their best. Our skilled groomers use gentle, pet-friendly products to ensure a soothing experience. Whether it's a refreshing bath or a full grooming session, your pet will leave our spa feeling pampered and rejuvenated.",
      imgCard: dog2,
      imgModal: dogHelp2, 
      cardClass: 'mini_card_2',
      titleClass: 'service_card_title service_card_title_2',
      descClass: 'service_card_desc_2',
    }
];
function Modal({ card, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!card) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="service_modal">
          
          <div className="servise_modal_info">
            <h1 className="servise_modal_title">{card.title}</h1>
            <p className="servise_modal_desc">{card.fullDesc}</p>
            <a href="#" className="servise_modal_close" onClick={(e) => { e.preventDefault(); onClose(); }}>
              Close
            </a>
          </div>

          <div className="servise_modal_img">
            <img src={card.imgModal} alt={card.title} />
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}
export function About() {
   const [activeCard, setActiveCard] = useState(null);
  return (
    <main className="about">
      <section className="section1_about">
        <div className="about_hero-inner">
          <div className="about_hero-text">
            <p className="about_desc">
              Welcome to the website to book all <br /> your pet care and sales
            </p>
            <h1 className="about_title">CHOOSE THE BEST WAY FOR</h1>
            <h2 className="about_subtitle">YOUR PET</h2>
            <button className="about_btn">Book a day to take care of your pet now</button>
          </div>
        </div>
      </section>
      <div className="section2_about">
        <div className="section2_text">
          <div className="title_text">
            <div className="text">Our Company</div>
            <div className="photo"><img src={union} alt="5" /></div>
          </div>
          <p className="abot_us">About us</p>
          <p className="about_us-desc">With 10 years of experience in the field of pet care and a team of experienced veterinarians, we are confident we can protect your pets from diseases they will get in the future. their nutrition and daily food intake.
Loving and pampering your pet is not enough, it must also go hand in hand with their health and our service is where you can give your full trust.</p>
          <p className="about_consulting">About consulting</p>
          <p className="about_consulting-desc">Each pet species has a different habitat and behavior, so meet and consult directly with an animal specialist.</p>
          <p className="out_service">Our Service</p>

          <section className="section-service_cards">
        <div className="service_cards_inner">
          {servicesData.map((card) => (
            <div key={card.id} className={`service_mini_card ${card.cardClass}`}>
              <div className="service_card_info">
                <h1 className={card.titleClass}>{card.title}</h1>
                <p className={card.descClass}>{card.shortDesc}</p>
                
                <button 
                  className="service_card_btn" 
                  onClick={() => setActiveCard(card)}
                >
                  Read More
                </button>
              </div>
              <img src={card.imgCard} alt="" />
            </div>
          ))}
        </div>
      </section>
        </div>
        <div className="section2_photo"><img src={baground} alt="bg" /></div>
      </div>
      {activeCard && <Modal card={activeCard} onClose={() => setActiveCard(null)} />}
    </main>
  )
}
