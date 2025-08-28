import { tailwindColors } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.accountName}>Main Account</Text>
      <Text style={styles.date}>Today, 28 Aug 2025</Text>
      <View style={styles.body}>
        <Text style={styles.balance}>$10,000.00</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.visa}>Visa</Text>
        <Text style={styles.number}>•••• •••• •••• 1234</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: tailwindColors.blue[700],
    padding: 16,
    borderRadius: 8,
    //  ISO/IEC 7810 ID-1
    aspectRatio: 1.586,
  },
  accountName: {
    fontSize: 16,
    fontWeight: "500",
    color: tailwindColors.white,
  },
  date: {
    fontSize: 11,
    color: tailwindColors.white,
    marginTop: 4,
  },
  number: {
    fontSize: 12,
    fontWeight: "600",
    color: tailwindColors.gray[200],
  },
  body: {
    justifyContent: "center",
    flex: 1,
  },
  balance: {
    fontSize: 28,
    fontWeight: "700",
    color: tailwindColors.white,
  },
  visa: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
    color: tailwindColors.white,
    opacity: 0.8,
    fontStyle: "italic",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
