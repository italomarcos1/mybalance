import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  EntriesContainer,
  RegisterButtonContainer,
  RegisterButton,
  RegisterText,
  NoEntriesRegistered,
  Entry,
  EntryDate,
  EntryDescription,
  EntryAmount,
  TotalAmount,
  TotalAmountContainer
} from './styles';

import PlusIcon from '~/assets/PlusIcon.svg'
import LessIcon from '~/assets/LessIcon.svg'
import Header from '~/components/HomeHeader';
import { useProvider } from '~/context';

export default function Home() {
  const { entries, total } = useProvider()

  console.log('total', isNaN(+'-50600'))

  return (
    <>
      <Header />
      <Container>
        <EntriesContainer>
          {!!entries.length ?
          <>
            <FlatList
              style={{ width: '100%' }}
              contentContainerStyle={{
                paddingVertical: 23,
                paddingHorizontal: 12,
                borderRadius: 5
              }}
              keyExtractor={item => String(item.id)}
              data={entries}
              renderItem={({ item }) =>
                <Entry>
                  <EntryDate>{item.date}</EntryDate>
                  <EntryDescription>{item.description}</EntryDescription>
                  <EntryAmount type={item.type}>{item.amount}</EntryAmount>
                </Entry>
              }
            />
            <TotalAmountContainer>
              <TotalAmount>
                SALDO
              </TotalAmount>
              <EntryAmount type={total[0] !== '-'}>{total}</EntryAmount>
            </TotalAmountContainer>
          </>
            :
            (
              <NoEntriesRegistered>
                Não há registros de{"\n"}entrada ou saída
              </NoEntriesRegistered>
            )
          }
        </EntriesContainer>
        <RegisterButtonContainer>
          <RegisterButton to="/cashIn">
            <>
              <PlusIcon />
              <RegisterText>Nova{"\n"}Entrada</RegisterText>
            </>
          </RegisterButton>
          <RegisterButton to="/cashOut">
            <>
              <LessIcon />
              <RegisterText>Nova{"\n"}Saída</RegisterText>
            </>
          </RegisterButton>
        </RegisterButtonContainer>
      </Container>
    </>
  );
}
