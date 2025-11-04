import React from "react";
import "./Login.css"; 


import { LuCamera, LuEye } from "react-icons/lu";

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Header con ícono */}
        <header className="login-header">
          <LuCamera size={32} className="header-icon" />
          <h1>PixelScribe</h1>
        </header>

        {/* Form Container */}
        <div className="form-card">
          <div className="form-card__content">
            {/* Page Heading */}
            <div className="form-card__header">
              <h2>Welcome Back</h2>
              <p className="form-card__subtitle">
              </p>
            </div>

            <form className="form-card__form">
              {/* Email TextField */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>

              {/* Password TextField */}
              <div className="form-group">
                <div className="form-group__header">
                  <label htmlFor="password">Password</label>
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="input-wrapper">
                  <input
                    id="password"
                    className="form-input"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <span className="password-icon">
                    <LuEye size={20} />
                  </span>
                </div>
              </div>

              {/* Log In Button */}
              <button type="submit" className="form-button">
                Log In
              </button>
            </form>

            {/* Helper Text Link */}
            <p className="helper-link">
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;