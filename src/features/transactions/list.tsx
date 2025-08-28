import { tailwindColors } from "@/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { sampleTransactions } from "./data";
import { getMccCategory } from "./mcc";

export const TransactionList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {sampleTransactions.map((transaction) => {
          const mccCategory = getMccCategory(transaction.mcc);
          return (
            <View key={transaction.id} style={styles.transactionItem}>
              <View
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
              >
                <View
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    backgroundColor: mccCategory.backgroundColor,
                    marginRight: 14,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <mccCategory.icon size={21} color={mccCategory.color} />
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.merchant}>
                    {transaction.merchantName}
                  </Text>
                  <Text style={styles.date}>{transaction.date}</Text>
                </View>
              </View>
              <Text
                style={[
                  styles.amount,
                  {
                    color:
                      transaction.type === "credit"
                        ? tailwindColors.green[500]
                        : styles.amount.color,
                  },
                ]}
              >
                {transaction.type === "credit" ? "+" : ""}$
                {Math.abs(transaction.amount).toFixed(2)}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    gap: 12,
  },
  listContainer: {
    gap: 1,
    backgroundColor: tailwindColors.stone[100],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
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
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 3,
  },
  transactionInfo: {
    flex: 1,
  },
  merchant: {
    fontSize: 16,
    fontWeight: "600",
    color: tailwindColors.stone[800],
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: tailwindColors.stone[600],
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: tailwindColors.stone[500],
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    color: tailwindColors.stone[800],
  },
});
