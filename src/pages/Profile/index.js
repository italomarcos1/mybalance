import React, { useCallback, useMemo, useState } from 'react';
import { Keyboard, ScrollView } from 'react-native';
import * as Yup from 'yup';

import {
  Form,
  Avatar,
  Input
} from './styles';

import Button from '~/components/Button'

import { emptyFieldRegex } from '~/helpers';
import Header from '~/components/GeneralHeader';
import { useTheme } from 'styled-components';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const { colors } = useTheme()

  const handleRegister = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        name:  Yup.string()
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
    } catch(err) {
      setErrors(err.inner.map(error => error.path));
    }
  }, [name, email, password, confirmPassword]);

  const inputProps = useMemo(() => {
    return {
      autoCorrect: false,
      autoCapitalize: "none",
      placeholderTextColor: colors.gray
    };
  }, [colors])

  return (
    <>
      <Header 
        title="Perfil"
        subtitle="Altere e confira seus dados"
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: colors.title
        }}
      >
        <Avatar
          source={{ uri: 'https://i.pinimg.com/originals/5a/dd/4d/5add4de2d2f1ec74e3bf4d9b3c575c35.png' }}
        />
          <Input
            placeholder="Seu nome"
            {...inputProps}
          />
          <Form>
          <Input
            placeholder="E-mail"
            {...inputProps}
          />
          <Input
            placeholder="Senha"
            {...inputProps}
          />
          <Input
            placeholder="Confirmar senha"
            {...inputProps}
          />
          <Button
            onPress={() => {}}
            style={{
              width: '85%',
              marginTop: 36
            }}
          >
            Atualizar
          </Button>
        </Form>
      </ScrollView>
    </>
  );
}
