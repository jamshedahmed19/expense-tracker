import React from "react";
import "./App.css";
import TransactionContextProvider from "./context/TransactionContext";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import IncomeExpense from "./components/IncomeExpense";
import AddTransactions from "./components/AddTransactions";

function App() {
  return (
    <div className="App">
      <Header />
      <TransactionContextProvider>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransactions />
      </TransactionContextProvider>
    </div>
  );
}

export default App;
