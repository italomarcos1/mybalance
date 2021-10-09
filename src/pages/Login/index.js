import React, { useCallback, useRef, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useHistory } from 'react-router-native';
import * as Yup from 'yup';
import Toast from 'react-native-tiny-toast';

import { Container, Form, RegisterButton, RegisterText } from './styles';

import Input from '~/components/Input'
import Button from '~/components/Button'

import Logo from '~/assets/Logo.svg'
import { emptyFieldRegex } from '~/helpers';
import { useProvider } from '~/context';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  
  const { handleSignIn, loading } = useProvider();

  const passwordInputRef = useRef();

  const { replace } = useHistory();

  const handleLogin = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
                  .matches(emptyFieldRegex, 'email')
                  .email('email'),
        password: Yup.string()
                     .matches(emptyFieldRegex, 'password'),
      })
      
      await schema.validate({ email, password }, { abortEarly: false });
      setErrors([]);

      // await handleSignIn({ email, password })

      Keyboard.dismiss();

      Toast.show('Bem-vindo ao Meu Balanço!');

      replace('/home');
    } catch(err) {
      if(err instanceof Yup.ValidationError) {
        setErrors(err.inner.map(error => error.path));
        return;
      }
      
      Toast.show(err.message)
    }
  }, [email, password, replace]);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Logo />
        <Form>
          <Input
            error={errors.includes('email')}
            keyboardType="email-address"
            onSubmitEditing={() => passwordInputRef.current.focus()}
            placeholder="E-mail"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            error={errors.includes('password')}
            onSubmitEditing={handleLogin}
            placeholder="Senha"
            ref={passwordInputRef}
            returnKeyType="send"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button
            onPress={() => handleLogin()}
            loading={loading}  
          >
            Entrar
          </Button>
        </Form>
        <RegisterButton onPress={() => replace('/register')}>
          <RegisterText>
            Primeira vez? Cadastre-se!
          </RegisterText>
        </RegisterButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}
