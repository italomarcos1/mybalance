import React, { useCallback, useMemo, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import { launchImageLibrary } from 'react-native-image-picker';

import {
  Container,
  Form,
  AvatarContainer,
  Avatar,
  UpdatePictureIcon,
  Input
} from './styles';

import Button from '~/components/Button'

import { emptyFieldRegex } from '~/helpers';
import Header from '~/components/GeneralHeader';
import { useTheme } from 'styled-components';
import { useProvider } from '~/context';
import Toast from 'react-native-tiny-toast';
import { api } from '~/services/api';

import Camera from '~/assets/Camera.svg'

export default function Profile() {
  const { loading, user, handleUpdateAvatar, handleUpdateProfile } = useProvider()
  
  const [name, setName] = useState(() => user.username);
  const [errors, setErrors] = useState([]);

  const { replace } = useHistory()

  const { colors } = useTheme()

  const inputProps = useMemo(() => {
    return {
      autoCorrect: false,
      autoCapitalize: "none",
      placeholderTextColor: colors.gray
    };
  }, [colors])

  const handleUpdate = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().matches(emptyFieldRegex, 'name'),
      })
      
      await schema.validate({ name }, { abortEarly: false });
      setErrors([]);

      await handleUpdateProfile({ name })

      Keyboard.dismiss();
      
      Toast.show('Perfil atualizado com sucesso!');

      replace('/home');
    } catch(err) {
      if(err instanceof Yup.ValidationError) {
        setErrors(err.inner.map(error => error.path));
        return;
      }
      
      Toast.show(err.message)
    }
  }, [name, replace]);

  const handleUploadImage = useCallback(async (photo) => {
   try {
      const data = new FormData();

      const subtype = photo.type.split('/').reverse().shift()

      data.append('file', {
        name: photo.fileName,
        type: photo.type,
        subtype,
        uri: photo.uri
      });
      
      data.append('id', user.id)

      const { data: { url } } = await api.post("files", data);

      handleUpdateAvatar(url)
      Toast.showSuccess('Avatar atualizado com sucesso!')
    } catch(err) {
      console.log('err', err);
      console.log('err', err.response.status);
      
      if(err.response.status === 413){
        Toast.show('Envie uma imagem mais leve.')
        return
      }

      Toast.show(err.message)
    }
  } ,[user])

  const handleProductImage = useCallback(async () => {
    try {
      launchImageLibrary({ noData: true }, async (response) => {
        if (!!response) {
          await handleUploadImage(response.assets[0])
        }
      });
    } catch (err) {
      Toast.show('Houve um erro, tente novamente.');
    }
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <>
        <Header 
          title="Perfil"
          subtitle="Altere e confira seus dados"
        />
        <Container>
          <AvatarContainer>
            <Avatar
              source={{
                uri: !!user.avatar ?
                user.avatar :
                'https://i.pinimg.com/originals/5a/dd/4d/5add4de2d2f1ec74e3bf4d9b3c575c35.png'
              }}
            />
            <UpdatePictureIcon 
              onPress={handleProductImage}
            >
              <Camera />
            </UpdatePictureIcon>
          </AvatarContainer>
            <Input
              placeholder="Seu nome"
              value={name}
              onChangeText={setName}
              {...inputProps}
            />
            <Form>
            <Button
              onPress={handleUpdate}
              loading={loading}
              style={{
                width: '85%',
                marginTop: 36
              }}
            >
              Atualizar
            </Button>
          </Form>
        </Container>
      </>
    </TouchableWithoutFeedback>
  );
}
