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

      <section className="section_service_offers">
        <div className="service_block_offers">
          <h1 className="service_title_offers">
            WHAT WE OFFER
          </h1>
          <p className="service_desc_offers">
            At our pet care center, we offer a comprehensive range of services to keep your pets happy and healthy. From grooming and bathing to ensure they look and feel their best, to veterinary check-ups and vaccinations for their health and safety, we cover all your pet's needs. We also provide specialized training programs to help with behavior and obedience, as well as luxurious boarding facilities for when you're away. Our dedicated team is passionate about providing the highest level of care and love for your furry friends, treating them as if they were our own.
          </p>
        </div>
      </section>

      <section className="section_service_training">
        <div className="service_training_allBlocks">
          {/* 1 блок */}
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
            <div className="service_training_img">
              <img src={dogBlock1} alt="group training" />
            </div>
          </div>

          {/* 2 блок */}
          <div className="service_training_block">
            <div className="service_training_img">
              <img src={dogBlock2} alt="puppy training" />
            </div>

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
          {/* 3 блок */}
          <div className="service_training_block">
            <div className="servise_training_inf3">
              <div className="service_training_text3">
                <h1 className="service_training_title">PRIVATE TRAINING</h1>
                <p className="service_training_desc">
                  Get one-on-one attention with our Private Training sessions. Customized plans address specific needs, making it ideal for pets requiring focused training.
                </p>
              </div>
              <div className="service_training_number3">3</div>
            </div>
            <div className="service_training_img">
              <img src={dogBlock3} alt="private training" />
            </div>
          </div>
          {/* 4 блок */}
          <div className="service_training_block">
            <div className="service_training_img">
              <img src={dogBlock4} alt="specialty training" />
            </div>

            <div className="servise_training_inf4">
              <div className="service_training_text4">
                <h1 className="service_training_title">SPECIALTY TRAINING</h1>
                <p className="service_training_desc">
                  Tailored for specific needs, our Specialty Program covers advanced obedience, agility, or behavior modification. It's perfect for competition preparation or addressing unique challenges.
                </p>
              </div>
              <div className="service_training_number4">4</div>
            </div>
          </div>
          {/* 5 блок */}
          <div className="service_training_block">
            <div className="servise_training_inf5">
              <div className="service_training_text5">
                <h1 className="service_training_title">VIRTUAL TRAINING</h1>
                <p className="service_training_desc">
                  Enjoy flexible, convenient training from home with our Virtual Training program. Perfect for busy schedules, it offers personalized sessions via video calls for effective results.
                </p>
              </div>
              <div className="service_training_number5">5</div>
            </div>
            <div className="service_training_img">
              <img src={dogBlock5} alt="virtual training" />
            </div>
          </div>
          {/* 6 блок */}
          <div className="service_training_block">
            <div className="service_training_img">
              <img src={dogBlock6} alt="security training" />
            </div>

            <div className="servise_training_inf6">
              <div className="service_training_text6">
                <h1 className="service_training_title">SECURITY TRAINING</h1>
                <p className="service_training_desc">
                  Train your dog for protection roles with our Security Program. Covering obedience and specialized techniques, it prepares your dog for security tasks while maintaining a balanced demeanor.
                </p>
              </div>
              <div className="service_training_number6">6</div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}