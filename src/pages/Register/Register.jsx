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
    const [rePassword, setRePassword] = useState('');

    // Ошибки
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [rePasswordError, setRePasswordError] = useState('');

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

        if (rePassword.trim() === '') {
            setRePasswordError('Повторите пароль');
            hasError = true;
        } else {
            setRePasswordError('');
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

    let rePasswordErrorMessage = null;
    if (rePasswordError) {
        rePasswordErrorMessage = <span className="error">{rePasswordError}</span>;
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
                       
                        <input
                             placeholder="Full name"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className={nameError ? 'input-error' : ''}
                        />
                       {nameErrorMessage}
                    </div>
                     <div className="input-box">
                       
                        <div className="phone-wrapper">
                            <select>
                                <option>+84</option>
                                <option>+7</option>
                                <option>+1</option>
                            </select>
                            <input
                                placeholder="Phone number"
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={phoneError ? 'input-error' : ''}
                            />
                        </div>
                        {phoneErrorMessage}
                    </div>

                    
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={emailError ? 'input-error' : ''}
                        />
                        {emailErrorMessage}
                    </div>

                    
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={passwordError ? 'input-error' : ''}
                        />
                        {passwordErrorMessage}
                    </div>

                    
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Re-password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            className={rePasswordError ? 'input-error' : ''}
                        />
                        {rePasswordErrorMessage}
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                <p className="login-text">
                    Already have account? <a href="/login">Login Here</a>
                </p>
            </div>
        </div>
    );
}