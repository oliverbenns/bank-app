import { colors } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

type CardType = "main" | "secondary" | "tertiary";

const cardColors: Record<CardType, string> = {
  main: colors.blue[600],
  secondary: colors.orange[500],
  tertiary: colors.gray[400],
};

type CardProps = {
  type: CardType;
  accountName: string;
};

export const Card = ({ type, accountName }: CardProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: cardColors[type],
        },
      ]}
    >
      <Text style={styles.accountName}>{accountName}</Text>
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
    backgroundColor: colors.blue[700],
    padding: 16,
    borderRadius: 8,
    //  ISO/IEC 7810 ID-1
    aspectRatio: 1.586,
  },
  accountName: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.white,
  },
  date: {
    fontSize: 11,
    color: colors.white,
    marginTop: 4,
  },
  number: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.gray[200],
  },
  body: {
    justifyContent: "center",
    flex: 1,
  },
  balance: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.white,
  },
  visa: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
    color: colors.white,
    opacity: 0.8,
    fontStyle: "italic",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
