import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import union from '../../assets/img/union.png';
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

    };
  return (
    <div className="login-container"> 
      <div className="login_form">
        <div className="login_title">
        <div className="login_title_text">REGISTER</div>
        <div className="login_logo"><img src={union} alt="" /></div>
        </div>
      </div>
    </div>
  );
}