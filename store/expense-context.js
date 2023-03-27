import { createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import { DUMMY_EXPENSES } from "./dummy-data";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES || []);

  const addExpense = (expensiveData) => {
    setExpenses((prev) => [...prev, expensiveData]);
  };

  const deleteExpense = (id) => {
    Alert.alert(
      "Delete Expensive",
      "Do you want to delete this expensive item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            const newExpenses = expenses.filter((expense) => expense.id !== id);
            setExpenses(newExpenses);
          },
        },
      ]
    );
  };

  const updateExpense = (id, expensiveData) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id ? Object.assign(expense, expensiveData) : expense
    );

    setExpenses(updatedExpenses);
  };

  return (
    <ExpensesContext.Provider
      value={{ expenses, addExpense, deleteExpense, updateExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => {
  const ctx = useContext(ExpensesContext);

  return ctx;
};
