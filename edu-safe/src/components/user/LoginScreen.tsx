import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginScreenProps {
  onLoginSuccess?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await axios.post("http://localhost:5017/api/auth/login", {
        email: data.email,
        senha: data.password,
      });

      const token = res.data.token;
      localStorage.setItem("token", token);

      if (onLoginSuccess) onLoginSuccess();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.mensagem || err.message);
      } else {
        alert("Erro desconhecido. Tente novamente.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <div style={styles.field}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email é obrigatório",
              minLength: { value: 5, message: "Mínimo de 5 caracteres" },
              maxLength: { value: 25, message: "Máximo de 25 caracteres" },
            }}
            render={({ field }) => (
              <input
                type="email"
                placeholder="Email"
                {...field}
                style={styles.input}
              />
            )}
          />
          {errors.email && <p style={styles.error}>{errors.email.message}</p>}
        </div>

        <div style={styles.field}>
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Senha é obrigatória",
              minLength: { value: 6, message: "Mínimo de 6 caracteres" },
              maxLength: { value: 100, message: "Máximo de 100 caracteres" },
            }}
            render={({ field }) => (
              <input
                type="password"
                placeholder="Senha"
                {...field}
                style={styles.input}
              />
            )}
          />
          {errors.password && (
            <p style={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" style={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },
};
