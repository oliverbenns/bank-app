import { tailwindColors } from "@/theme";
import { StyleSheet, Text, View } from "react-native";
import { getMccCategory } from "./mcc";
import { Transaction } from "./model";

type TransactionItemProps = Transaction;

export const TransactionItem = ({
  mcc,
  merchantName,
  date,
  amount,
  type,
}: TransactionItemProps) => {
  const mccCategory = getMccCategory(mcc);

  return (
    <View style={styles.container}>
      <View
        style={[styles.icon, { backgroundColor: mccCategory.backgroundColor }]}
      >
        <mccCategory.icon size={21} color={mccCategory.color} />
      </View>
      <View style={styles.info}>
        <View style={styles.meta}>
          <Text style={styles.merchant}>{merchantName}</Text>
          <Text style={styles.date}>
            {new Date(date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            {new Date(date).toLocaleDateString([], {
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
                type === "credit"
                  ? tailwindColors.green[600]
                  : styles.amount.color,
            },
          ]}
        >
          {type === "credit" ? "+" : ""}${Math.abs(amount).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
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
  icon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: tailwindColors.gray[100],
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
});
