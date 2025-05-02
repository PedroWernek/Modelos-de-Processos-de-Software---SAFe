import { useState } from "react";
import { LoginForm } from "./../components/user/LoginForm";
import { RegisterForm } from "./../components/user/RegisterForm";
import "./../css/AuthPage.css";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (data: { email: string; password: string }) => {
    console.log("Logging in with:", data); // como chama no console ta em english, mas rever
    // TODO: login no back
  };

  const handleRegisterSubmit = (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Registering with:", data); // mesmo comentario que o de cima
    // TODO: cadastro! ver como colocar com o pedro (e se ja pode colocar?)
  };

  return (
    <div className="auth-page">
      <h1>{isLogin ? "Login" : "Registrar"}</h1>

      {isLogin ? (
        <LoginForm onSubmit={handleLoginSubmit} />
      ) : (
        <RegisterForm onSubmit={handleRegisterSubmit} />
      )}

      <p className="toggle-message">
        {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
        <button
          type="button"
          className="toggle-button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Registrar" : "Login"}
        </button>
      </p>
    </div>
  );
}
