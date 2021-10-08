import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  flex-direction: row;
  width: 100%;
  height: ${RFValue(58)}px;
  padding: 0 7.5px;
  border-style: solid;
  border-width: 2.5px;
  border-color: ${({ focused, error, theme }) =>
    (error ? theme.colors.error :
     focused ? theme.colors.secondary :
     'transparent')};
`;

export const CustomInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 100;
  margin-left: 10px;
  font-family: 'Raleway';
`;
