import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./Login.css"; 
import { LuCamera, LuEye } from "react-icons/lu";

const Login: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setError(""); 

    try {
      
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: password,
      });

      
      console.log("Inicio de sesión exitoso:", response.data);

      
      const token = response.data.token;       
      if (token) {
        localStorage.setItem("authToken", token);
      
   
        navigate("/dashboard"); 
      } else {
        setError("No se recibió token del servidor");
      }

    } catch (err) {
      console.error("Error en el inicio de sesión:", err);
      if (axios.isAxiosError(err) && err.response) {
     
        setError(err.response.data.message || "Email o contraseña incorrectos");
      } else {
        setError("Error de conexión con el servidor");
      }
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
              </p>
            </div>

            {/* 6. Conecta el formulario a la función handleSubmit */}
            <form className="form-card__form" onSubmit={handleSubmit}>
              
              {/* 7. Muestra el error si existe */}
              {error && <p className="form-error">{error}</p>}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="you@example.com"
                  type="email"
                  // 8. Conecta los inputs a los estados
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

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
                    // 8. Conecta los inputs a los estados
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className="password-icon">
                    <LuEye size={20} />
                  </span>
                </div>
              </div>

              <button type="submit" className="form-button">
                Log In
              </button>
            </form>

            <p className="helper-link">
              Don't have an account?{" "}
              {/* 9. Asegúrate de que este link apunte a /register */}
              <a href="/register">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;