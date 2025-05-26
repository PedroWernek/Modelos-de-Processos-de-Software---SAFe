import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    formState: { errors }
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await axios.post('http://localhost:5017/api/auth/login', {
        email: data.email,
        senha: data.password,
      });

      const token = res.data.token;
      await AsyncStorage.setItem('token', token);

      if (onLoginSuccess) onLoginSuccess();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        Alert.alert('Erro ao fazer login', err.response?.data?.mensagem || err.message);
      } else {
        Alert.alert('Erro desconhecido', 'Algo deu errado.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          minLength: { value: 5, message: "At least 5 characters" },
          maxLength: { value: 25, message: "Max 25 characters" },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            style={styles.input}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: { value: 6, message: "At least 6 characters" },
          maxLength: { value: 100, message: "Max 100 characters" },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Senha"
            value={value}
            onChangeText={onChange}
            secureTextEntry
            style={styles.input}
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 80 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
  },
});