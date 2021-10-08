import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import PropTypes from 'prop-types';

import { Container, Content, TitleContainer, Name, OpenProfileText } from './styles';

import Back from '~/assets/Back.svg'
import Exit from '~/assets/Exit.svg'

export default function GeneralHeader({ title, subtitle }) {
  const { goBack, location } = useHistory()

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
        <Link to="/">
          <Exit />
        </Link>
      }
    </Container>
  );
}

GeneralHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}