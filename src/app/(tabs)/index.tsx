import { Card } from "@/components/card";
import { CardControls } from "@/components/card-controls";
import { TransactionList } from "@/features/transactions/list";
import { tailwindColors } from "@/theme";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.cardContainer}>
          <Card />
          <CardControls />
        </View>
        <TransactionList />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tailwindColors.gray[50],
  },
  cardContainer: {
    padding: 16,
    paddingHorizontal: 48,
    backgroundColor: tailwindColors.white,
  },
});
