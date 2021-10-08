import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Link } from 'react-router-native';

export const Avatar = styled.Image`
  width: ${RFValue(96)}px;
  height: ${RFValue(96)}px;
  border-radius: ${RFValue(48)}px;
  margin-top: ${RFValue(48)}px;
`;

export const Input = styled.TextInput`
  font-family: 'RalewayBold';
  border-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.light_gray};
  font-size: ${RFValue(24)}px;
  margin-top: ${RFValue(32)}px;
  padding: 0 10px 5px;
  width: 85%;
  text-align: center;
`;

export const Form = styled.View`
  margin-top: ${RFValue(24)}px;
  width: 85%;
  align-items: center;
  justify-content: space-between;
`;

export const RegisterButtonContainer = styled.View`
  margin-top: ${RFValue(13)}px;
  width: 85%;
  height: 22%;
  flex-direction: row;
  justify-content: space-between;
`;

export const RegisterButton = styled(Link)`
  height: 100%;
  width: 48.5%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
`;

export const RegisterText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(20)}px;
  font-family: 'RalewayBold';
`;

export const NoEntriesRegistered = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(23)}px;
  font-family: 'Raleway';
`;

