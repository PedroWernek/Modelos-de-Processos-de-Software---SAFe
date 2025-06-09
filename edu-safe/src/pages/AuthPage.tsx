import { useState } from "react";
import { LoginScreen } from "../components/user/LoginScreen";
import { RegisterForm } from "./../components/user/RegisterForm";
import "./../css/AuthPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const handleRegisterSubmit = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      await axios.post("http://localhost:5017/api/users", data);
      alert("Usuário registrado com sucesso!");
      setIsLogin(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(`Erro: ${err.response?.data?.title || err.message}`);
      } else {
        alert("Erro desconhecido.");
      }
    }
  };

  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div className="auth-page">
        <h1>{isLogin ? "Login" : "Registrar"}</h1>

        {isLogin ? (
          <LoginScreen onLoginSuccess={() => navigate("/modulos")} />
        ) : (
          <RegisterForm onSubmit={handleRegisterSubmit} />
        )}

        <p className="toggle-message">
          {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Registrar" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
