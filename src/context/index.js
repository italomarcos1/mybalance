import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const Context = createContext({});

export function Provider({ children }) {
  const [entries, setEntries] = useState([]);

  const total = useMemo(() => {
    if(!entries.length) return 0;

    const totalAmount = entries.reduce((sum, { type, amount }) =>
      type === 'in' ? sum += +amount : sum -= +amount 
    , 0);

    return totalAmount;
  }, [entries]);

  const manageEntry = useCallback((data) => {
    try {
      // dá push na API, retorna o Array e joga no setState
      setEntries(prevState => [data, ...prevState])
    } catch(err) {
      console.log('error')
    }
  }, []);

  return (
    <Context.Provider
      value={{
        name: 'Rogerio',
        entries,
        manageEntry,
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