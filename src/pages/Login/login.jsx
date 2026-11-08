import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import union from '../../assets/img/union.png';
import kris from '../../assets/img/kris.png';
import nastya from '../../assets/img/nastya.png';
import dina from '../../assets/img/dina.png';
import { Link } from 'react-router-dom';
export function Login() { 
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    // ошибки
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');  
    const renderError = (error) => {
        return error ? <span className="error">{error}</span> : null;
    };

     const handleNextSubmit = (e) => {
        e.preventDefault();

        let hasError = false;

        if (fullName.trim() === '') {
            setNameError('Enter your name');
            hasError = true;
        } else {
            setNameError('');
        }

        if (password.trim() === '') {
            setPasswordError('Enter your password');
            hasError = true;
        } else {
            setPasswordError('');
        }
        if (!hasError) {
        navigate('/about');
    }

    };
  return (
    <div className="login-container"> 
      <div className="login_form">
        <div className="login_title">
        <div className="login_title_text">
        <p className="title_text_1">WELCOME TO</p>
        <p className="title_text_2">PET PARADISE</p>
        </div>
        <div className="login_logo"><img src={union} alt="" /></div>
        </div>
        <p className="login_description_text">We offer expert pet training, high-quality food, and everything your pet needs to stay happy and healthy.</p>
         <form onSubmit={handleNextSubmit}>
                    <div className="input-box">
                        <div className="styled-wrapper">
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className={`styled-input ${nameError ? 'input-error' : ''}`}
                                id="fullName"
                                placeholder=" "
                            />
                            <label htmlFor="fullName" className="floating-label">Full name</label>
                            {renderError(nameError)}
                        </div>
                    </div>

                    <div className="input-box">
                        <div className="styled-wrapper">
                            <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`styled-input ${passwordError ? 'input-error' : ''}`}
                            id='password'
                            placeholder=" "
                        />
                        <label htmlFor="password" className="floating-label">Password</label>
                        {renderError(passwordError)}
                        </div>
                    </div>
                     <div className="remember-me-container">
                        <input 
                            type="checkbox" 
                            id="rememberMe" 
                            className="remember-checkbox" 
                        />
                        <label htmlFor="rememberMe" className="remember-label">
                            Remember me
                        </label>
                    </div>
                    
                    <button type="submit" className="submit-btn">Sign Up</button>
                    <p className="login-text">
                        Don't have account? <Link to="/register" className="register-link">Register here</Link>
                    </p>
                </form>
      </div>

       <div className="login_info">
            <p className="login_info_text1">Healthy pets bring joy and enrich your life.</p>
            <div className="login_info_exclusive-block">
                <p className="exclusive_text-1">Join Our Online Pet Care & Protection Community</p>
                <p className="exclusive_text-2">
                    Join our online animal protection community today and share your knowledge and experience to help care for and protect pets everywhere!
                </p>
                <div className="community-footer">
                    <div className="avatars">
                        <img src={kris} alt="" className='avatar'/>
                        <img src={nastya} alt="" className='avatar'/>
                        <img src={dina} alt="" className='avatar'/>
                    </div>
                    <div className="community-text">
                        <p className="exclusive_text-3">JOIN WITH 100K+ <br />PEOPLES ON THE WORLD!</p>
                        <p className="community-subtext">Let meet some new friend on community</p>
                    </div>
                    <button type="button" className="join-now-btn">Join Now</button>
                </div>
            </div>
        </div>
    </div>
  );
}