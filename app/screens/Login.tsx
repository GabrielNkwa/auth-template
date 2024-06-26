import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  useWindowDimensions,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/Logo_1.png';
import CustomButtons from '../components/CustomButtons';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const Login = () => {
  const { height } = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Check your Email');
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed failed :' + error.message);
    } finally {
      setLoading(false);
    }
  };
  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert('Check your Email');
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed failed :' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        </View>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        {loading ? (
          <ActivityIndicator size="large" color="#0000f" />
        ) : (
          <>
            <CustomButtons text="Login" onPress={signIn} type="PRIMARY" />
            <CustomButtons text="Sign Up" onPress={signUp} type="TERTIARY" />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  button: {
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingBottom: 10,
    marginBottom: 20,
  },
});
