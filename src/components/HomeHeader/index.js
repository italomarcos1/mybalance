import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';

import { Container, ProfileInfoContainer,OpenProfileContainer, Avatar, Name, OpenProfileText } from './styles';

import Exit from '~/assets/Exit.svg'
import { useProvider } from '~/context';

export default function Header() {
  const { user, signOut } = useProvider()
  const { replace } = useHistory()

  const handleSignOut = useCallback(() => {
    signOut();
    replace("/");
  }, [replace]);

  return (
    <Container>
      <ProfileInfoContainer
        onPress={() => replace("/profile")}
      >
        <>
          <Avatar
            source={{
              uri: user.avatar
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
      <TouchableOpacity
        onPress={handleSignOut}
      >
        <Exit />
      </TouchableOpacity>
    </Container>
  );
}
