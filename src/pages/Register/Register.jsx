import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import union from "../../assets/img/union.png";

export function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Поля формы
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [apartment, setApartment] = useState("");
  const [index, setIndex] = useState("");

  // Ошибки
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [cityError, setCityError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [houseError, setHouseError] = useState("");
  const [indexError, setIndexError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const renderError = (error) => {
    return error ? <span className="error">{error}</span> : null;
  };

  const handleNextSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (fullName.trim() === "") {
      setNameError("Enter your name");
      hasError = true;
    } else {
      setNameError("");
    }

    if (phone.trim() === "") {
      setPhoneError("Enter your phone");
      hasError = true;
    } else if (!/^\+?\d{10,15}$/.test(phone.trim())) {
      setPhoneError("Phone must contain 10–15 digits");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (email.trim() === "") {
      setEmailError("Enter your email");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Invalid email format");
      hasError = true;
    } else {
      setEmailError("");
    }

    // ПРОВЕРКА ПАРОЛЯ: минимум 8 символов, заглавная, цифра, спецсимвол (как в Zod)
    if (password.trim() === "") {
      setPasswordError("Enter your password");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      hasError = true;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      hasError = true;
    } else if (!/[0-9]/.test(password)) {
      setPasswordError("Password must contain at least one digit");
      hasError = true;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError(
        "Password must contain at least one special character (!@#$%^&*)",
      );
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) {
      return;
    }

    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (country.trim() === "") {
      setCountryError("Enter your country");
      hasError = true;
    } else setCountryError("");

    if (city.trim() === "") {
      setCityError("Enter your city");
      hasError = true;
    } else setCityError("");

    if (street.trim() === "") {
      setStreetError("Enter your street");
      hasError = true;
    } else setStreetError("");

    if (house.trim() === "") {
      setHouseError("Enter your house");
      hasError = true;
    } else setHouseError("");

    if (index.trim() === "") {
      setIndexError("Enter your index");
      hasError = true;
    } else setIndexError("");

    if (hasError) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          password,
          address: {
            country: country.trim(),
            city: city.trim(),
            street: street.trim(),
            house: house.trim(),
            apartment: apartment.trim() || undefined,
            index: index.trim(),
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Если бэкенд вернул массив ошибок от Zod (например, неверный телефон)
        if (data.errors && data.errors.length > 0) {
          alert(data.errors[0].message); // Покажет точную причину, например "Некорректный номер телефона"
        } else {
          alert(data.error || "Ошибка при регистрации");
        }
        return;
      }

      alert("Регистрация прошла успешно! Теперь вы можете войти.");
      navigate("/login");
    } catch (error) {
      console.error("Ошибка сети:", error);
      alert("Сервер недоступен. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register_container">
      <div className="register_form">
        <div className="register_title">
          <div className="register_title_text">REGISTER</div>
          <div className="register_logo">
            <img src={union} alt="" />
          </div>
        </div>

        {step === 1 && (
          <form onSubmit={handleNextSubmit}>
            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`styled-input ${nameError ? "input-error" : ""}`}
                  id="fullName"
                  placeholder=" "
                />
                <label htmlFor="fullName" className="floating-label">
                  Full name
                </label>
                {renderError(nameError)}
              </div>
            </div>
            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`styled-input ${phoneError ? "input-error" : ""}`}
                  id="phoneNumber"
                  placeholder=" "
                />
                <label htmlFor="phoneNumber" className="floating-label">
                  Phone number
                </label>
                {renderError(phoneError)}
              </div>
            </div>
            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`styled-input ${emailError ? "input-error" : ""}`}
                  id="email"
                  placeholder=" "
                />
                <label htmlFor="email" className="floating-label">
                  Email
                </label>
                {renderError(emailError)}
              </div>
            </div>

            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`styled-input ${passwordError ? "input-error" : ""}`}
                  id="password"
                  placeholder=" "
                />
                <label htmlFor="password" className="floating-label">
                  Password
                </label>
                {renderError(passwordError)}
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={`styled-input ${countryError ? "input-error" : ""}`}
                  placeholder=" "
                  id="country"
                />
                <label htmlFor="country" className="floating-label">
                  Country
                </label>
                {renderError(countryError)}
              </div>
            </div>
            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="text"
                  placeholder=" "
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`styled-input ${cityError ? "input-error" : ""}`}
                  id="city"
                />
                <label htmlFor="city" className="floating-label">
                  City
                </label>
                {renderError(cityError)}
              </div>
            </div>
            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="text"
                  placeholder=" "
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className={`styled-input ${streetError ? "input-error" : ""}`}
                  id="street"
                />
                <label htmlFor="street" className="floating-label">
                  Street
                </label>
                {renderError(streetError)}
              </div>
            </div>
            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="text"
                  placeholder=" "
                  value={house}
                  onChange={(e) => setHouse(e.target.value)}
                  className={`styled-input ${houseError ? "input-error" : ""}`}
                  id="house"
                />
                <label htmlFor="house" className="floating-label">
                  House
                </label>
                {renderError(houseError)}
              </div>
            </div>
            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="text"
                  placeholder=" "
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  className="styled-input"
                  id="apartment"
                />
                <label htmlFor="apartment" className="floating-label">
                  Apartment (optional)
                </label>
              </div>
            </div>
            <div className="input-box">
              <div className="styled-wrapper">
                <input
                  type="text"
                  placeholder=" "
                  value={index}
                  onChange={(e) => setIndex(e.target.value)}
                  className={`styled-input ${indexError ? "input-error" : ""}`}
                  id="index"
                />
                <label htmlFor="index" className="floating-label">
                  Index
                </label>
                {renderError(indexError)}
              </div>
            </div>

            <div className="btn-group">
              <button
                type="button"
                className="submit-btn"
                onClick={() => setStep(1)}
                disabled={isSubmitting}
              >
                Back
              </button>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
        <div className="step-indicators">
          <span className={`dot ${step === 1 ? "active" : ""}`}></span>
          <span className={`dot ${step === 2 ? "active" : ""}`}></span>
        </div>

        {step === 1 && (
          <p className="login-text">
            Already have account? <Link to="/login">Login Here</Link>
          </p>
        )}
      </div>
      <div className="register_info">
        <p className="register_info_text1">
          Become a member today and help protect animals!
        </p>
        <div className="register_info_exlusive-block">
          <p className="exclusive_text-1">
            Member Benefits: Exclusive Discounts, Rewards
          </p>
          <p className="exclusive_text-2">
            Exclusive Discounts: Enjoy special pricing on pet food, toys, and
            accessories.
          </p>
          <div className="exclusive_text-3">
            Early Access: Be the first to know about new products and
            promotions.
          </div>
        </div>
      </div>
    </div>
  );
}
