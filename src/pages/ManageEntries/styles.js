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
