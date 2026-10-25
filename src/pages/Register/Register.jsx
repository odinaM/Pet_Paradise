import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import union from '../../assets/img/union.png';

export function Register(){
const navigate = useNavigate();

// Поля формы
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Ошибки
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();

        let hasError = false;

        if (fullName.trim() === '') {
            setNameError('Заполните имя');
            hasError = true;
        } else {
            setNameError('');
        }

        if (phone.trim() === '') {
            setPhoneError('Заполните телефон');
            hasError = true;
        } else {
            setPhoneError('');
        }

        if (email.trim() === '') {
            setEmailError('Заполните email');
            hasError = true;
        } else {
            setEmailError('');
        }

        if (password.trim() === '') {
            setPasswordError('Заполните пароль');
            hasError = true;
        } else {
            setPasswordError('');
        }

        if (hasError) {
            return;
        }

        navigate('/home');
    };

     // Переменные для вывода ошибок 
    let nameErrorMessage = null;
    if (nameError) {
        nameErrorMessage = <span className="error">{nameError}</span>;
    }

    let phoneErrorMessage = null;
    if (phoneError) {
        phoneErrorMessage = <span className="error">{phoneError}</span>;
    }

    let emailErrorMessage = null;
    if (emailError) {
        emailErrorMessage = <span className="error">{emailError}</span>;
    }

    let passwordErrorMessage = null;
    if (passwordError) {
        passwordErrorMessage = <span className="error">{passwordError}</span>;
    }

    return(
        <div className='register_container'>
            <div className="register_form">
                <div className="register_title">
                    <div className="register_title_text">REGISTER</div>
                    <div className="register_logo"><img src={union} alt="" /></div>
                </div>
                     <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <div className="styled-wrapper">
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className={`styled-input ${nameError ? 'input-error' : ''}`}
                                id="fullName"
                            />
                            <label htmlFor="fullName" className="floating-label">Full name</label>
                            {nameErrorMessage}
                        </div>
                        
                    </div>
                    <div className="input-box">
                        <div className="styled-wrapper">
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={`styled-input ${phoneError ? 'input-error' : ''}`}
                                id="phoneNumber"
                            />
                            <label htmlFor="phoneNumber" className="floating-label">Phone number</label>
                            {phoneErrorMessage}
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="styled-wrapper">
                            <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`styled-input ${emailError ? 'input-error' : ''}`}
                        />
                        {emailErrorMessage}
                        </div>
                    </div>

                    <div className="input-box">
                        <div className="styled-wrapper">
                            <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`styled-input ${passwordError ? 'input-error' : ''}`}
                        />
                        {passwordErrorMessage}
                        </div>
                    </div>
                    
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                <p className="login-text">
                    Already have account? <a href="/login">Login Here</a>
                </p>
            </div>
            <div className="register_info">
                <p className="register_info_text1">Become a member today and help protect animals!</p>
                <div className="register_info_exlusive-block">
                    <p className="exclusive_text-1">Member Benefits: Exclusive Discounts, Rewards</p>
                    <p className="exclusive_text-2">Exclusive Discounts: Enjoy special pricing on pet food, toys, and accessories.</p>
                    <div className="exclusive_text-3">Early Access: Be the first to know about new products and promotions.</div>
                </div>
            </div>
        </div>
    );
}