import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Link } from 'react-router-native';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.title};
  flex: 1;
`;

export const EntriesContainer = styled.View`
  height: 66%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: ${RFValue(24)}px;
  width: 85%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Entry = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(36)}px;
`;

export const EntryContent = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(19)}px;
  font-family: 'Raleway';
`;

export const EntryDate = styled(EntryContent)`
  color: ${({ theme }) => theme.colors.light_gray};
  font-family: 'Raleway';
`;

export const EntryDescription = styled(EntryContent)`
  color: ${({ theme }) => theme.colors.black};
  margin-left: ${RFValue(8)}px;
  font-family: 'Raleway';
`;

export const EntryAmount = styled(EntryContent)`
  color: ${({ theme, type }) =>
    type === 'in' ? theme.colors.success : theme.colors.error};
  margin-left: auto;
  font-family: 'Raleway';
`;

export const TotalAmountContainer = styled(Entry)`
  justify-content: space-between;
  margin: auto 0 0;
  padding: 0 12px;
  width: 100%;
`;

export const TotalAmount = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(20)}px;
  text-transform: uppercase;
  font-family: 'RalewayBold';
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
  text-align: center;
  font-family: 'Raleway';
`;

