import { differenceInBusinessDays } from "date-fns";
import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { useExpenses } from "../../store/expense-context";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

// {
//   id: 'e3',
//   description: 'Some bananas',
//   amount: 5.99,
//   date: new Date('2021-12-01')
// },
// {
//   id: 'e4',
//   description: 'A book',
//   amount: 14.99,
//   date: new Date('2022-02-19')
// },
// {
//   id: 'e5',
//   description: 'Another book',
//   amount: 18.59,
//   date: new Date('2022-02-18')
// },
// {
//   id: 'e6',
//   description: 'A pair of trousers',
//   amount: 89.29,
//   date: new Date('2022-01-05')
// },
// {
//   id: 'e7',
//   description: 'Some bananas',
//   amount: 5.99,
//   date: new Date('2021-12-01')
// },
// {
//   id: 'e8',
//   description: 'A book',
//   amount: 14.99,
//   date: new Date('2022-02-19')
// },
// {
//   id: 'e9',
//   description: 'Another book',
//   amount: 18.59,
//   date: new Date('2022-02-18')
// }

function ExpensesOutput({ expensesPeriod }) {
  let { expenses } = useExpenses();

  const filteredExpenses = expenses.filter(
    (expense) =>
      differenceInBusinessDays(new Date(), new Date(expense.date)) <= 7
  );

  expenses = expensesPeriod === "Total" ? expenses : filteredExpenses;

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
