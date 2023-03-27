import { FlatList, StyleSheet, Text } from "react-native";

import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => (
        <ExpenseItem
          id={item.id}
          description={item.description}
          amount={item.amount}
          date={item.date}
        />
      )}
      ListEmptyComponent={() => (
        <Text style={styles.fallbackText}>No expenses registered</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  fallbackText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});

export default ExpensesList;
