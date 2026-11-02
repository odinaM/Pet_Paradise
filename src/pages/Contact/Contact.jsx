import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Contact.css';
import paw from '../../assets/icons/paw.svg';
import CatFon from '../../assets/img/cat_contact.webp';
import logoWhite from '../../assets/icons/Logo_contact.svg';

export function Contact(){
    return(
        <main className="contact">
            <section className="section_contact">
                    <div className="hero_contact">
                        <div className="contact_with_us">
                            <form className='form_contact' action="">
                                <div className="block_title_contact">
                                    <h1 className="title_contact">CONTACT WITH US</h1>
                                    <img className='dop_paw_contact' src={paw} alt="paw" />
                                </div>
                                <div className="block_inputs_contact">
                                    <input type="text" placeholder='Full Name' className="inp_contact_first_name" />
                                    <input type="tel" placeholder='Phone Number' className="inp_contact_Phone" />
                                    <input type="email" placeholder='Email' className="inp_contact_email" />
                                </div>
                                <div className="block_buttons_contact">
                                    <button className="btn_submit_contact">Sumbit</button>
                                    <button className="btn_refresh_contact">Refresh</button>
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