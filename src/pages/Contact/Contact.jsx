import React, { useState } from "react";
import "./Contact.css";
import paw from "../../assets/icons/paw.svg";
import logoWhite from "../../assets/icons/Logo_contact.svg";
import { apiFetch } from "../../api";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" });
  const [isLoading, setIsLoading] = useState(false); // cостояние для кнопки "Отправка"

  const phoneRegex =
    /^(\+?\d{1,3})?[\s\-()]*\d{3}[\s\-()]*\d{3}[\s\-()]*\d{2}[\s\-()]*\d{2}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const cleaned = value.replace(/[^\d+\-()\s]/g, "");
    setPhone(cleaned);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
  };

  const validate = () => {
    const newErrors = { name: "", phone: "", email: "" };

    if (!name.trim()) {
      newErrors.name = "Enter your name";
    }

    if (!phone.trim()) {
      newErrors.phone = "Enter your phone";
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = "Invalid phone number";
    }

    if (!email.trim()) {
      newErrors.email = "Enter your email";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Invalid email";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone && !newErrors.email;
  };

  //функция отправки
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    try {
      // данные на бэкенд
      const { ok, status, data } = await apiFetch("/contacts", {
        method: "POST",
        body: JSON.stringify({
          fullName: name,
          phone: phone,
          email: email,
        }),
      });

      if (!ok) {
        // Если бэкенд вернул ошибку от Zod
        if (data.errors && data.errors.length > 0) {
          alert(data.errors[0].message);
        } else {
          alert(data?.error || "Не удалось отправить сообщение");
        }
        return;
      }

      // Успех!
      alert(data.message || "Ваше сообщение успешно отправлено!");
      handleRefresh(); // Очищаем форму
    } catch (err) {
      console.error("Ошибка сети:", err);
      alert("Сервер недоступен. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    setName("");
    setPhone("");
    setEmail("");
    setErrors({ name: "", phone: "", email: "" });
  };

  return (
    <main className="contact">
      <section className="section_contact">
        <div className="hero_contact">
          <div className="contact_with_us">
            <form className="form_contact" onSubmit={handleSubmit} noValidate>
              <div className="block_title_contact">
                <h1 className="title_contact">CONTACT WITH US</h1>
                <img className="dop_paw_contact" src={paw} alt="paw" />
              </div>

              <div className="block_inputs_contact">
                {/* Name */}
                <div className="input-group">
                  <div
                    className={`input-wrapper ${errors.name ? "input_error" : ""}`}
                  >
                    <input
                      type="text"
                      id="name"
                      className="inp_contact"
                      placeholder=" "
                      value={name}
                      onChange={handleNameChange}
                    />
                    <label htmlFor="name" className="floating-label">
                      Full name
                    </label>
                    {errors.name && (
                      <span className="error-inline">{errors.name}</span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="input-group">
                  <div
                    className={`input-wrapper ${errors.phone ? "input_error" : ""}`}
                  >
                    <input
                      type="tel"
                      id="phone"
                      className="inp_contact"
                      placeholder=" "
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    <label htmlFor="phone" className="floating-label">
                      Phone number
                    </label>
                    {errors.phone && (
                      <span className="error-inline">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="input-group">
                  <div
                    className={`input-wrapper ${errors.email ? "input_error" : ""}`}
                  >
                    <input
                      type="email"
                      id="email"
                      className="inp_contact"
                      placeholder=" "
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <label htmlFor="email" className="floating-label">
                      Email
                    </label>
                    {errors.email && (
                      <span className="error-inline">{errors.email}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="block_buttons_contact">
                {/* Блокировка кнопки во время загрузки и замена текста */}
                <button
                  type="submit"
                  className="btn_submit_contact"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  className="btn_refresh_contact"
                  onClick={handleRefresh}
                  disabled={isLoading}
                >
                  Refresh
                </button>
              </div>
            </form>
          </div>

          <div className="right_block_contact">
            <img src={logoWhite} alt="logo" />
            <p className="text_contact">
              We care about your pet’s needs! Leave your contact information,
              and we'll keep you updated on the best deals and new arrivals in
              pet food and toys. Don't miss out on providing the best for your
              furry friends!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
