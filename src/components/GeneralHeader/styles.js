import { RFValue } from 'react-native-responsive-fontsize';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFValue(96)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 7.5%;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  margin-left: ${RFValue(16)}px;
`;

export const GoBackIcon = styled.Image`
  height: ${RFValue(42)}px;
  width: ${RFValue(42)}px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(26)}px;
  line-height: ${RFValue(31)}px;
  font-family: 'RalewayBold';
`;

export const OpenProfileText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: 'Raleway';
  font-size: ${RFValue(14)}px;
`;