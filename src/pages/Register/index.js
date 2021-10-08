import React, { useCallback, useRef, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useHistory } from 'react-router-native';
import * as Yup from 'yup';

import { Container, Form, RegisterButton, RegisterText } from './styles';

import Input from '~/components/Input'
import Button from '~/components/Button'

import Logo from '~/assets/Logo.svg'
import { emptyFieldRegex } from '~/helpers';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const { replace } = useHistory();
  
  const handleRegister = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
                  .matches(emptyFieldRegex, 'name'),
        email: Yup.string()
                  .matches(emptyFieldRegex, 'email')
                  .email('email'),
        password: Yup.string()
                     .matches(emptyFieldRegex, 'password'),
        confirmPassword: Yup.string().when('password', (password, field) =>
                     password ? field.oneOf([Yup.ref('password')]) : field),
      })
      
      await schema.validate({ name, email, password, confirmPassword }, { abortEarly: false });
      setErrors([]);

      Keyboard.dismiss();

      replace('/home');
    } catch(err) {
      setErrors(err.inner.map(error => error.path));
    }
  }, [name, email, password, confirmPassword, replace]);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Logo />
        <Form>
          <Input
            error={errors.includes('name')}
            onSubmitEditing={() => emailInputRef.current.focus()}
            placeholder="Nome"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
          />
          <Input
            error={errors.includes('email')}
            keyboardType="email-address"
            onSubmitEditing={() => passwordInputRef.current.focus()}
            placeholder="E-mail"
            ref={emailInputRef}
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            error={errors.includes('password')}
            onSubmitEditing={() => confirmPasswordInputRef.current.focus()}
            placeholder="Senha"
            ref={passwordInputRef}
            returnKeyType="send"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Input
            error={errors.includes('confirmPassword')}
            onSubmitEditing={handleRegister}
            placeholder="Confirme a senha"
            ref={confirmPasswordInputRef}
            returnKeyType="next"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Button onPress={() => handleRegister()}>Cadastrar</Button>
        </Form>
        <RegisterButton onPress={() => replace('/')}>
          <RegisterText>
            Já tem uma conta? Entre agora!
          </RegisterText>
        </RegisterButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}
