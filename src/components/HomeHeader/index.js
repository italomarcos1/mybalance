import React from 'react';
import { Link } from 'react-router-native';

import { Container, ProfileInfoContainer,OpenProfileContainer, Avatar, Name, OpenProfileText } from './styles';

import Exit from '~/assets/Exit.svg'

export default function Header() {
  return (
    <Container>
      <ProfileInfoContainer to="/profile">
        <>
          <Avatar
            source={{ uri: 'https://i.pinimg.com/originals/5a/dd/4d/5add4de2d2f1ec74e3bf4d9b3c575c35.png' }}
          />
          <OpenProfileContainer>
            <Name>
              Olá, Fulano
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
