import { StyleSheet, Text, View } from "react-native";

export const BalanceCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Current Balance</Text>
      <Text style={styles.balance}>$15,200.45</Text>
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Account</Text>
          <Text style={styles.detailValue}>****1234</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Type</Text>
          <Text style={styles.detailValue}>Checking</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  balance: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 16,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailItem: {
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});
