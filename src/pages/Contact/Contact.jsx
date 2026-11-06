import React, { useState } from 'react';
import './Contact.css';
import paw from '../../assets/icons/paw.svg';
import logoWhite from '../../assets/icons/Logo_contact.svg';

export function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ name: '', phone: '', email: '' });

    const phoneRegex = /^(\+?\d{1,3})?[\s\-()]*\d{3}[\s\-()]*\d{3}[\s\-()]*\d{2}[\s\-()]*\d{2}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const cleaned = value.replace(/[^\d+\-()\s]/g, '');
        setPhone(cleaned);
        if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
    };


    const handleNameChange = (e) => {
        setName(e.target.value);
        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
    };


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
    };

    const validate = () => {
        const newErrors = { name: '', phone: '', email: '' };

        if (!name.trim()) {
            newErrors.name = 'Пожалуйста, введите имя';
        }

        if (!phone.trim()) {
            newErrors.phone = 'Пожалуйста, введите номер телефона';
        } else if (!phoneRegex.test(phone.trim())) {
            newErrors.phone = 'Введите корректный номер (например, +7 999 123-45-67)';
        }

        if (!email.trim()) {
            newErrors.email = 'Пожалуйста, введите email';
        } else if (!emailRegex.test(email.trim())) {
            newErrors.email = 'Введите корректный email (например, name@example.com)';
        }

        setErrors(newErrors);
        return !newErrors.name && !newErrors.phone && !newErrors.email;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validate()) return;

        alert('Форма успешно отправлена!');

        setName('');
        setPhone('');
        setEmail('');
        setErrors({ name: '', phone: '', email: '' });
    };

    const handleRefresh = () => {
        setName('');
        setPhone('');
        setEmail('');
        setErrors({ name: '', phone: '', email: '' });
    };

    return (
        <main className="contact">
            <section className="section_contact">
                <div className="hero_contact">
                    <div className="contact_with_us">
                        <form className='form_contact' onSubmit={handleSubmit} noValidate>
                            <div className="block_title_contact">
                                <h1 className="title_contact">CONTACT WITH US</h1>
                                <img className='dop_paw_contact' src={paw} alt="paw" />
                            </div>

                            <div className="block_inputs_contact">
                                {/* Name */}
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        className={`inp_contact_first_name ${errors.name ? 'input_error' : ''}`} 
                                        placeholder=" " 
                                        value={name} 
                                        onChange={handleNameChange}
                                    />
                                    <label htmlFor="name">Full Name</label>
                                    {errors.name && <span className="error_msg">{errors.name}</span>}
                                </div>

                                {/* Phone */}
                                <div className="input-group">
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        className={`inp_contact_Phone ${errors.phone ? 'input_error' : ''}`} 
                                        placeholder=" " 
                                        value={phone} 
                                        onChange={handlePhoneChange}
                                    />
                                    <label htmlFor="phone">Phone Number</label>
                                    {errors.phone && <span className="error_msg">{errors.phone}</span>}
                                </div>

                                {/* Email */}
                                <div className="input-group">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className={`inp_contact_email ${errors.email ? 'input_error' : ''}`} 
                                        placeholder=" " 
                                        value={email} 
                                        onChange={handleEmailChange}
                                    />
                                    <label htmlFor="email">Email</label>
                                    {errors.email && <span className="error_msg">{errors.email}</span>}
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