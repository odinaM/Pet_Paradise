import React, { useState } from 'react';
import './Contact.css';
import paw from '../../assets/icons/paw.svg';
import logoWhite from '../../assets/icons/Logo_contact.svg';

export function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim() || !email.trim()) {
            alert("Пожалуйста, заполните все поля");
            return;
        }
        alert("Форма успешно отправлена!");
    };


    const handleRefresh = () => {
        setName('');
        setPhone('');
        setEmail('');
    };

    return (
        <main className="contact">
            <section className="section_contact">
                <div className="hero_contact">
                    <div className="contact_with_us">
                        <form className='form_contact' onSubmit={handleSubmit}>
                            <div className="block_title_contact">
                                <h1 className="title_contact">CONTACT WITH US</h1>
                                <img className='dop_paw_contact' src={paw} alt="paw" />
                            </div>
                            
                            <div className="block_inputs_contact">
                                <div className="input-group">
                                    <input type="text" id="name" className="inp_contact_first_name" placeholder=" "  value={name} onChange={(e) => setName(e.target.value)} />
                                    <label htmlFor="name">Full Name</label>
                                </div>

                                <div className="input-group">
                                    <input type="tel" id="phone" className="inp_contact_Phone" placeholder=" " value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    <label htmlFor="phone">Phone Number</label>
                                </div>

                                <div className="input-group">
                                    <input type="email" id="email" className="inp_contact_email"  placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>

                            <div className="block_buttons_contact">
                                <button type="submit" className="btn_submit_contact">Submit</button>
                                <button type="button" className="btn_refresh_contact" onClick={handleRefresh}>Refresh</button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="right_block_contact">
                        <img src={logoWhite} alt="logo" />
                        <p className="text_contact">We care about your pet’s needs! Leave your contact information, and we'll keep you updated on the best deals and new arrivals in pet food and toys. Don't miss out on providing the best for your furry friends!</p>
                    </div>
                </div>
            </section>
        </main>
    );
}