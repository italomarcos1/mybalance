import React, { forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components'

import { Container, Text } from './styles';

// Icon.loadFont();

export default function Button({ children, loading, style, ...rest }) {
  return (
    <Container style={style} {...rest}>
      {loading ?
        <ActivityIndicator size="small" color="#fbfdfd" /> :
        <Text>{children}</Text>
      }
    </Container>
  );
};

