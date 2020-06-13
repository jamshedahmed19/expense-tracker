import React, { createContext, useReducer, useEffect } from "react";
import { TransactionReducer } from "./TransactionReducer";

const initialState = {
  transactions: [
  ],
};

export const TransactionContext = createContext(initialState);

function TransactionContextProvider(props) {
  const [state, dispatch] = useReducer(TransactionReducer, initialState, ()  => {
    const localData = localStorage.getItem('state');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  function removeTransaction(id) {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        removeTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
}

export default TransactionContextProvider;
