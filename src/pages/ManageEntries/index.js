import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useHistory } from 'react-router-native';
import * as Yup from 'yup';
import { getDate, getMonth } from 'date-fns' 
import Toast from 'react-native-tiny-toast'

import { Container, Form } from './styles';

import Input from '~/components/Input'
import Button from '~/components/Button'

import { emptyFieldRegex, onlyNumbersRegex } from '~/helpers';
import Header from '~/components/GeneralHeader';
import { useProvider } from '~/context';

export default function AddEntry() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);

  const { loading, user, manageEntry } = useProvider()

  const descriptionInputRef = useRef();

  const { replace, location } = useHistory();
    
  const entryType = useMemo(() => {
    const type = location.pathname.slice(5).toLowerCase();

    return type === 'in' ? 'Entrada' : 'Saída';
  }, [location])
    
  const handleEntry = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        amount: Yup.string()
                  .matches(onlyNumbersRegex, 'amount'),
        description: Yup.string()
                  .matches(emptyFieldRegex, 'description')
      })
      
      await schema.validate({ amount, description }, { abortEarly: false });
      setErrors([]);

      Keyboard.dismiss();

      const day = getDate(new Date());
      const month = getMonth(new Date()) + 1;
      
      const formattedDay = String(day).length === 1 ? `0${day}` : day;
      const formattedMonth = String(month).length === 1 ? `0${month}` : month;
      
      const date = `${formattedDay}/${formattedMonth}`

      const { id: user_id } = user;

      const newEntry = {
        id: Date.now(),
        user_id,
        type: entryType === 'Entrada' ? 'in' : 'out',
        date,
        description,
        amount
      }

      await manageEntry(newEntry);

      Toast.showSuccess(`${entryType} adicionada com sucesso.`)

      replace('/home');
    } catch(err) {
      setErrors(err.inner.map(error => error.path));
    }
  }, [amount, description, entryType, user, replace]);


  return (
    <>
      <Header 
        title={`Nova ${entryType}`}
        subtitle={`Adicione uma nova ${entryType.toLowerCase()}`}
      />
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <Container>
          <Form>
            <Input
              error={errors.includes('amount')}
              keyboardType="phone-pad"
              onSubmitEditing={() => descriptionInputRef.current.focus()}
              placeholder="Valor (apenas números)"
              returnKeyType="next"
              value={amount}
              onChangeText={setAmount}
              />
            <Input
              error={errors.includes('description')}
              onSubmitEditing={() => handleEntry()}
              placeholder="Descrição"
              ref={descriptionInputRef}
              returnKeyType="send"
              value={description}
              onChangeText={setDescription}
              />
            <Button 
              onPress={() => handleEntry()}
              loading={loading}
            >
              Salvar {entryType}
            </Button>
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}
