import React, { forwardRef, useState } from 'react';
// import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components'

import { Container, CustomInput } from './styles';

// Icon.loadFont();

const Input = forwardRef(({ icon, style, error, ...rest }, ref) => {
  const { colors }  = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container focused={isFocused} style={style} error={error}>
      {/* {icon && <Icon name={icon} size={16} color="#999" />} */}
      <CustomInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={colors.placeholder}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </Container>
  );
});

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

Input.displayName = 'Input';

export default Input;
