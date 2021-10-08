import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  height: ${RFValue(46)}px;
  justify-content: center;
  width: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(20)}px;
  font-family: 'RalewayBold';
`;
