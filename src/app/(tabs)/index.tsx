import { BalanceCard } from "@/components/balance-card";
import { TransactionList } from "@/features/transactions/list";
import { tailwindColors } from "@/theme";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{ padding: 16, paddingHorizontal: 48 }}>
          <BalanceCard />
        </View>
        <TransactionList />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tailwindColors.stone[50],
  },
});
