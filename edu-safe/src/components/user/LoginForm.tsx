import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form space-y-4">
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            minLength: { value: 5, message: "At least 5 characters" },
            maxLength: { value: 25, message: "Max 25 characters" },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "At least 6 characters" },
            maxLength: { value: 100, message: "Max 100 characters" },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}