import { BalanceCard } from "@/components/balance-card";
import { Header } from "@/components/header";
import { RecentActivity } from "@/components/recent-activity";
import { TransactionList } from "@/components/transaction-list";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <BalanceCard />
      <RecentActivity />
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
