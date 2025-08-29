import { StyleSheet, Text, View } from "react-native";
import { SpendingCategory } from "./model";
import { ProgressBar } from "./progress-bar";

type SpendingItemProps = SpendingCategory;

export const SpendingItem = ({
  category,
  amount,
  percentage,
}: SpendingItemProps) => {
  return (
    <View>
      <View style={styles.meta}>
        <Text style={styles.name}>{category}</Text>
        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      </View>
      <ProgressBar value={percentage} />
    </View>
  );
};

const styles = StyleSheet.create({
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
});
