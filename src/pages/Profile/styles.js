import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Link } from 'react-router-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.colors.title};
`;

export const AvatarContainer = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: ${RFValue(60)}px;
  margin-top: ${RFValue(48)}px;
  position: relative;
`;

export const UpdatePictureIcon = styled.TouchableOpacity`
  position: absolute;
  bottom: ${RFValue(2.5)}px;
  right: ${RFValue(2.5)}px;
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: ${RFValue(60)}px;
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
  color: ${({ theme }) => theme.colors.white};
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

