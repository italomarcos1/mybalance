import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import Toast from 'react-native-tiny-toast'

import { api } from '~/services/api';

const Context = createContext({});

export function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);
  
  const [loading, setLoading] = useState(false);

  const total = useMemo(() => {
    if(!entries.length) return 0;

    const totalAmount = entries.reduce((sum, { type, amount }) =>
      type === 'in' ? sum += +amount : sum -= +amount 
    , 0);

    return totalAmount;
  }, [entries]);

  const manageEntry = useCallback(async(entry) => {
    try {
      // dá push na API, retorna o Array e joga no setState
      setLoading(true)
      const { data } = await api.post('/entry', entry)

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
      setEntries(entries)
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

      console.log('d', data)

      const { data: updatedInfo } = await api.put('/update', {
        id: user.id,
        username,
      });

      console.log('updatedInfo', updatedInfo)

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