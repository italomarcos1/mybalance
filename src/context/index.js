import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import Toast from 'react-native-tiny-toast'

import { api } from '~/services/api';
import { fakeEntries } from '~/data';

const Context = createContext({});

export function Provider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    username: 'John Doe',
    email: 'john@doe.com',
    avatar: 'https://i.pinimg.com/originals/5a/dd/4d/5add4de2d2f1ec74e3bf4d9b3c575c35.png'
  });
  const [entries, setEntries] = useState(fakeEntries);
  
  const [loading, setLoading] = useState(false);

  const total = useMemo(() => {
    if(!entries.length) return 0;

    const totalAmount = entries.reduce((sum, { type, amount }) =>
      type === 'in' ? sum += +amount : sum -= +amount 
    , 0);

    return totalAmount;
  }, [entries]);

  const manageEntry = useCallback(async(data) => {
    try {
      // dá push na API, retorna o Array e joga no setState
      setLoading(true)
      // const { data } = await api.post('/entry', entry)

      setEntries(prevState => [data, ...prevState])
    } catch(err) {
      Toast.show(err.message)
    } finally {
      setLoading(false)
    }
  }, []);

  const handleUpdateAvatar = useCallback((url) => {
    setUser(prevState => {
      return {...prevState, avatar: url }
    });
  }, []);

  const handleSignIn = useCallback(async (data) => {
    try {
      // dá push na API, retorna o Array e joga no setState
      setLoading(true)
      const { email, password } = data;

      const { data: { user, entries } } = await api.post('/sessions', {
        email,
        password
      });

      setUser(user);
      setEntries(entries.reverse())
    } catch(err) {
      throw new Error(err.response.data.message)
    } finally {
      setLoading(false)
    }
  }, []);

  const handleSignUp = useCallback(async (data) => {
    try {
      // dá push na API, retorna o Array e joga no setState
      setLoading(true)
      const { name: username, email, password } = data;

      const { data: user } = await api.post('/register', {
        username,
        email,
        password
      });

      setUser(user);
    } catch(err) {
      throw new Error(err.response.data.message)
    } finally {
      setLoading(false)
    }
  }, []);

  const handleUpdateProfile = useCallback(async (data) => {
    try {
      // dá push na API, retorna o Array e joga no setState
      setLoading(true)
      const { name: username } = data;

      const { data: updatedInfo } = await api.put('/update', {
        id: user.id,
        username,
      });

      setUser(prevState => {
        return { ...prevState, ...updatedInfo }
      });
    } catch(err) {
      throw new Error(err.response.data.message)
    } finally {
      setLoading(false)
    }
  }, [user]);

  const signOut = useCallback(async (data) => {
    setUser(null);
    setEntries([]);
    Toast.show('Obrigado por usar o app, volte sempre.')
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        loading,
        entries,
        manageEntry,
        handleSignIn,
        handleSignUp,
        handleUpdateAvatar,
        handleUpdateProfile,
        signOut,
        setUser,
        total
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useProvider() {
  const context = useContext(Context);

  return context;
}