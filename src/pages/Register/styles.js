import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  flex: 1;
  justify-content: center;
`;

export const Form = styled.View`
  height: ${RFValue(330)}px;
  justify-content: space-between;
  margin-top: ${RFValue(37)}px;
  width: 85%;
`;

export const RegisterButton = styled.TouchableOpacity`
  margin-top: ${RFValue(32)}px;
`;

export const RegisterText = styled.Text`
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(15)}px;
  font-family: 'RalewayBold';
`;

