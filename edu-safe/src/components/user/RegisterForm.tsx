// usei register pq juro que nunca lembro qual eh registrar e qual eh logar com sign in e sign up
// TODO: conversar com o pedro... tipo me baseei nas coisa do back-end, mas como o conteudo do site eh em ptbr, sera que essas msg de erro... tb n deveriam ser?

import { useForm } from "react-hook-form";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
}

export function RegisterForm({ onSubmit }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form space-y-4">
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "At least 2 characters" },
            maxLength: { value: 100, message: "Max 100 characters" },
            pattern: {
              value: /^[a-zA-Z\s]+$/, // regex amores
              message: "Only letters and spaces allowed",
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

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

      <button type="submit">Registrar</button>
    </form>
  );
}