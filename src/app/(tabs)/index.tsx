import { BalanceCard } from "@/components/balance-card";
import { Header } from "@/components/header";
import { TransactionList } from "@/features/transactions/list";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <BalanceCard />
      <TransactionList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
