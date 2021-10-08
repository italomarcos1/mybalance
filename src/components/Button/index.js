import React, { forwardRef } from 'react';
// import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components'

import { Container, Text } from './styles';

// Icon.loadFont();

export default function Button({ children, style, ...rest }) {
  return (
    <Container style={style} {...rest}>
      <Text>
        {children}
      </Text>
    </Container>
  );
};

