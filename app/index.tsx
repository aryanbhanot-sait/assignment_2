import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import credentials from '../credentials.json';
import Button from '../components/button';
import { useRouter } from 'expo-router';
import Welcome from './welcome';

interface Credential {
  username: string;
  password: string;
}

const typedCredentials: Credential[] = credentials.users;

export default function SignInScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const router = useRouter();

  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasNumber = /[0-9]/;
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  const handleSignIn = () => {
    setUsernameError('');
    setPasswordError('');

    let isValidInputFormat = true;
    let isAuthenticated = false;

    if (username.length < 5) {
      setUsernameError('Username must be at least 5 characters long.');
      isValidInputFormat = false;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      isValidInputFormat = false;
    } else if (!hasUppercase.test(password)) {
      setPasswordError('Password must include at least one uppercase letter.');
      isValidInputFormat = false;
    } else if (!hasLowercase.test(password)) {
      setPasswordError('Password must include at least one lowercase letter.');
      isValidInputFormat = false;
    } else if (!hasNumber.test(password)) {
      setPasswordError('Password must include at least one number.');
      isValidInputFormat = false;
    } else if (!hasSpecialChar.test(password)) {
      setPasswordError('Password must include at least one special character.');
      isValidInputFormat = false;
    }

    if (isValidInputFormat) {
      const userFound = typedCredentials.find(
        (credentials: Credential) => credentials.username == username
      );

      if (!userFound) {
        setUsernameError('Username not found.');
      } else if (userFound.password !== password) {
        setPasswordError('Incorrect password.');
      } else {
        isAuthenticated = true;
      }
    }

    if (isAuthenticated) {

      setUsername('');
      setPassword('');
      router.push('welcome');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={[styles.input, usernameError ? styles.inputError : null]}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={[styles.input, passwordError ? styles.inputError : null]}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>

      <Button title="Sign In" onPress={handleSignIn} color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#00567a',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    height: 50,
    borderColor: '#b0e0e6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 2,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});