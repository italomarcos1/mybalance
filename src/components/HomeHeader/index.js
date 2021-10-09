import React from 'react';
import { Link, useHistory } from 'react-router-native';

import { Container, ProfileInfoContainer,OpenProfileContainer, Avatar, Name, OpenProfileText } from './styles';

import Exit from '~/assets/Exit.svg'
import { useProvider } from '~/context';

export default function Header() {
  const { user } = useProvider()
  const { replace } = useHistory()

  return (
    <Container>
      <ProfileInfoContainer
        onPress={() => replace("/profile")}
      >
        <>
          <Avatar
            source={{
              uri: !!user.avatar ?
                user.avatar :
                'https://i.pinimg.com/originals/5a/dd/4d/5add4de2d2f1ec74e3bf4d9b3c575c35.png'
            }}
          />
          <OpenProfileContainer>
            <Name>
              Olá, {user.username}
            </Name>
            <OpenProfileText>
              Ver perfil
            </OpenProfileText>
          </OpenProfileContainer>
        </>
      </ProfileInfoContainer>
      <Link to="/">
        <Exit />
      </Link>
    </Container>
  );
}
