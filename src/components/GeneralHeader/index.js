import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import PropTypes from 'prop-types';

import { Container, Content, TitleContainer, Name, OpenProfileText } from './styles';

import Back from '~/assets/Back.svg'
import Exit from '~/assets/Exit.svg'
import { useProvider } from '~/context';

export default function GeneralHeader({ title, subtitle }) {
  const { replace, goBack, location } = useHistory()
  const { signOut } = useProvider()

  const handleSignOut = useCallback(() => {
    signOut();
    replace("/");
  }, [replace]);

  return (
    <Container>
      <Content>
        <TouchableOpacity onPress={goBack}>
          <Back />
        </TouchableOpacity>
        <TitleContainer>
          <Name>
            {title}
          </Name>
          <OpenProfileText>
            {subtitle}
          </OpenProfileText>
        </TitleContainer>
      </Content>
      {location.pathname === '/profile' &&
        <TouchableOpacity
          onPress={handleSignOut}
        >
          <Exit />
        </TouchableOpacity>
      }
    </Container>
  );
}

GeneralHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}