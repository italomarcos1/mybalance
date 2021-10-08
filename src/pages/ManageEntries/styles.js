import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.title};
  flex: 1;
`;

export const Form = styled.View`
  height: ${RFValue(188)}px;
  justify-content: space-between;
  margin-top: ${RFValue(40)}px;
  width: 85%;
`;

export const Title = styled.Text`
  align-self: flex-start;
  font-size: ${RFValue(26)}px;
  margin-top: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'RalewayBold';
  padding-left: 7.5%;
`;