import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      merchant: "Starbucks",
      category: "Food & Dining",
      amount: -8.75,
      date: "Today",
    },
    {
      id: 2,
      merchant: "Uber",
      category: "Transportation",
      amount: -24.5,
      date: "Today",
    },
    {
      id: 3,
      merchant: "Amazon",
      category: "Shopping",
      amount: -67.89,
      date: "Yesterday",
    },
    {
      id: 4,
      merchant: "Salary",
      category: "Income",
      amount: 3200.0,
      date: "2 days ago",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionItem}>
          <View style={styles.transactionInfo}>
            <Text style={styles.merchant}>{transaction.merchant}</Text>
            <Text style={styles.category}>{transaction.category}</Text>
            <Text style={styles.date}>{transaction.date}</Text>
          </View>
          <Text
            style={[
              styles.amount,
              { color: transaction.amount > 0 ? "#34C759" : "#FF3B30" },
            ]}
          >
            {transaction.amount > 0 ? "+" : ""}$
            {Math.abs(transaction.amount).toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  viewAll: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "500",
  },
  transactionItem: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  transactionInfo: {
    flex: 1,
  },
  merchant: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  amount: {
    fontSize: 18,
    fontWeight: "600",
  },
});
