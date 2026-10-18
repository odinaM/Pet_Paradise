import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Service.css';
import dog1 from '../../assets/img/dog_card1.png';
import dog2 from '../../assets/img/dog_card2.png';
import dog3 from '../../assets/img/dog_card3.png';
import dogBlock1 from '../../assets/img/dog_block1.png';
import dogBlock2 from '../../assets/img/dog_block2.png';
import dogBlock3 from '../../assets/img/dog_block3.png';
import dogBlock4 from '../../assets/img/dog_block4.png';
import dogBlock5 from '../../assets/img/dog_block5.png';
import dogBlock6 from '../../assets/img/dog_block6.png';
import dogHelp1 from '../../assets/img/dog_help1.png';
import dogHelp2 from '../../assets/img/dog_help2.png';
import dogHelp3 from '../../assets/img/dog_help3.png';

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
    shortDesc: 'Our pet spa offers a luxurious and relaxing experience for your furry friends. We provide a ran...',
    fullDesc: "Our pet spa offers a luxurious and relaxing experience for your furry friends. We provide a range of grooming services, including baths, haircuts, nail trimming, and ear cleaning, all designed to keep your pet looking and feeling their best. Our skilled groomers use gentle, pet-friendly products to ensure a soothing experience. Whether it's a refreshing bath or a full grooming session, your pet will leave our spa feeling pampered and rejuvenated.",
    imgCard: dog2,
    imgModal: dogHelp2, 
    cardClass: 'mini_card_2',
    titleClass: 'service_card_title service_card_title_2',
    descClass: 'service_card_desc_2',
  },
  {
    id: 3,
    title: 'Environmental Consulting',
    shortDesc: 'Environmental consulting involves...',
    fullDesc: "Environmental consulting involves providing expert advice and solutions to help organizations manage their environmental responsibilities. These consultants assess and mitigate the environmental impact of projects, ensuring compliance with regulations and promoting sustainable practices. They conduct environmental impact assessments, develop management plans, and provide guidance on waste management, pollution control, and natural resource conservation.",
    imgCard: dog3,
    imgModal: dogHelp3,
    cardClass: 'mini_card_3',
    titleClass: 'service_card_title',
    descClass: 'service_card_desc_3',
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


export function Service() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <main className="service">
      {/* 1. Секция Hero */}
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

      {/* 2. Секция с карточками и модалкой */}
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

      {/* 3. Секция WHAT WE OFFER */}
      <section className="section_service_offers">
        <div className="service_block_offers">
          <h1 className="service_title_offers">WHAT WE OFFER</h1>
          <p className="service_desc_offers">
            At our pet care center, we offer a comprehensive range of services to keep your pets happy and healthy. From grooming and bathing to ensure they look and feel their best, to veterinary check-ups and vaccinations for their health and safety, we cover all your pet's needs. We also provide specialized training programs to help with behavior and obedience, as well as luxurious boarding facilities for when you're away. Our dedicated team is passionate about providing the highest level of care and love for your furry friends, treating them as if they were our own.
          </p>
        </div>
      </section>

      {/* 4. Секция Training */}
      <section className="section_service_training">
        <div className="service_training_allBlocks">
          
          <div className="service_training_block">
            <div className="servise_training_inf1">
              <div className="service_training_text1">
                <h1 className="service_training_title1">GROUP TRAINING</h1>
                <p className="service_training_desc1">
                  Our Group Training sessions help dogs learn essential commands in a social setting. Ideal for all breeds, these classes teach obedience and good manners, while allowing pets and owners to connect.
                </p>
              </div>
              <div className="service_training_number1">1</div>
            </div>
            <div className="service_training_img"><img src={dogBlock1} alt="group training" /></div>
          </div>

          <div className="service_training_block">
            <div className="service_training_img"><img src={dogBlock2} alt="puppy training" /></div>
            <div className="servise_training_inf2">
              <div className="service_training_text2">
                <h1 className="service_training_title2">PUPPY TRAINING</h1>
                <p className="service_training_desc2">
                  Our Puppy Training classes focus on foundational skills like potty training and basic commands. It's crucial for developing well-behaved adult dogs and offers support for new owners.
                </p>
              </div>
              <div className="service_training_number2">2</div>
            </div>
          </div>

          <div className="service_training_block">
            <div className="servise_training_inf3">
              <div className="service_training_text3">
                <h1 className="service_training_title3">PRIVATE TRAINING</h1>
                <p className="service_training_desc3">
                  Get one-on-one attention with our Private Training sessions. Customized plans address specific needs, making it ideal for pets requiring focused training.
                </p>
              </div>
              <div className="service_training_number3">3</div>
            </div>
            <div className="service_training_img"><img src={dogBlock3} alt="private training" /></div>
          </div>

          <div className="service_training_block">
            <div className="service_training_img"><img src={dogBlock4} alt="specialty training" /></div>
            <div className="servise_training_inf4">
              <div className="service_training_text4">
                <h1 className="service_training_title4">SPECIALTY TRAINING</h1>
                <p className="service_training_desc4">
                  Tailored for specific needs, our Specialty Program covers advanced obedience, agility, or behavior modification. It's perfect for competition preparation or addressing unique challenges.
                </p>
              </div>
              <div className="service_training_number4">4</div>
            </div>
          </div>

          <div className="service_training_block">
            <div className="servise_training_inf5">
              <div className="service_training_text5">
                <h1 className="service_training_title5">VIRTUAL TRAINING</h1>
                <p className="service_training_desc5">
                  Enjoy flexible, convenient training from home with our Virtual Training program. Perfect for busy schedules, it offers personalized sessions via video calls for effective results.
                </p>
              </div>
              <div className="service_training_number5">5</div>
            </div>
            <div className="service_training_img"><img src={dogBlock5} alt="virtual training" /></div>
          </div>

          <div className="service_training_block">
            <div className="service_training_img"><img src={dogBlock6} alt="security training" /></div>
            <div className="servise_training_inf6">
              <div className="service_training_text6">
                <h1 className="service_training_title6">SECURITY TRAINING</h1>
                <p className="service_training_desc6">
                  Train your dog for protection roles with our Security Program. Covering obedience and specialized techniques, it prepares your dog for security tasks while maintaining a balanced demeanor.
                </p>
              </div>
              <div className="service_training_number6">6</div>
            </div>
          </div>

        </div>
      </section>

      {activeCard && <Modal card={activeCard} onClose={() => setActiveCard(null)} />}
    </main>
  );
}