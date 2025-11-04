import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { LuCamera, LuEye, LuEyeOff } from "react-icons/lu";
import { LoginHook } from "../hooks/LoginHook";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { email, password, setEmail, setPassword, handleLogin } = LoginHook();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await handleLogin(e); 
    if (success) {
      navigate("/home"); 
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <header className="login-header">
          <LuCamera size={32} className="header-icon" />
          <h1>PixelScribe</h1>
        </header>

        <div className="form-card">
          <div className="form-card__content">
            <div className="form-card__header">
              <h2>Welcome Back</h2>
              <p className="form-card__subtitle">
                Please enter your details below to continue.
              </p>
            </div>

            <form className="form-card__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="you@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <div className="form-group__header">
                  <label htmlFor="password">Password</label>
                  <a href="#" className="forgot-link">Forgot Password?</a>
                </div>
                <div className="input-wrapper">
                  <input
                    id="password"
                    className="form-input"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="form-button">
                Log In
              </button>
            </form>

            <p className="helper-link">
              Don't have an account?{" "}
              <a href="/register">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
