import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function handlerAmountChange() {
    console.log("a");
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          keyboardType="decimal-pad"
          onChangeText={handlerAmountChange}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          placeholder="YYY-MM-DD"
          maxLength={10}
          onChangeText={() => {}}
        />
      </View>
      <Input label="Description" multiline autoCorrect={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});

export default ExpenseForm;
