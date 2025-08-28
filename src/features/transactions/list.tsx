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
                  <View style={styles.meta}>
                    <Text style={styles.merchant}>
                      {transaction.merchantName}
                    </Text>
                    <Text style={styles.date}>
                      {new Date(transaction.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      {new Date(transaction.date).toLocaleDateString([], {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.amount,
                      {
                        color:
                          transaction.type === "credit"
                            ? tailwindColors.green[600]
                            : styles.amount.color,
                      },
                    ]}
                  >
                    {transaction.type === "credit" ? "+" : ""}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </Text>
                </View>
              </View>
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
    backgroundColor: tailwindColors.gray[100],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  viewAll: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "500",
  },
  transactionItem: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  transactionInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  merchant: {
    fontSize: 16,
    fontWeight: "600",
    color: tailwindColors.gray[800],
  },
  meta: {
    gap: 4,
  },
  date: {
    fontSize: 12,
    color: tailwindColors.gray[500],
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: tailwindColors.gray[800],
  },
});
