import React from "react";
import "./Register.css"; // Importamos nuestro nuevo archivo CSS

// Importamos el ícono de visibilidad. 
// Necesitarás instalar 'react-icons' si no lo has hecho:
// npm install react-icons
import { LuEye } from "react-icons/lu";

const Register: React.FC = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        {/* Header */}
        <header className="register-header">
          <h1>PixelScribe</h1>
        </header>

        {/* Form Container */}
        <div className="form-card">
          <div className="form-card__content">
            {/* Page Heading */}
            <div className="form-card__header">
              <h2>Create Your Account</h2>
            </div>

            <form className="form-card__form">
              {/* Email TextField */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>

              {/* Password TextField */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <input
                    id="password"
                    className="form-input"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <span className="password-icon">
                    <LuEye size={22} />
                  </span>
                </div>
              </div>

              {/* Sign Up Button */}
              <button type="submit" className="form-button">
                Sign Up
              </button>
            </form>

            {/* Helper Text Link */}
            <p className="helper-link">
              Already have an account? <a href="#">Log in</a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="register-footer">
          <p>
            <a href="#">Terms of Service</a> · <a href="#">Privacy Policy</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Register;