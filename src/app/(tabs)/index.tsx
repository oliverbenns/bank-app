import { Card } from "@/components/card";
import { CardControls } from "@/components/card-controls";
import { TransactionList } from "@/features/transactions/list";
import { tailwindColors } from "@/theme";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

const cardTypes = [
  {
    id: "1",
    type: "main",
    accountName: "Main",
  },
  {
    id: "2",
    type: "secondary",
    accountName: "Savings",
  },
  {
    id: "3",
    type: "tertiary",
    accountName: "Rainy Day",
  },
] as const;

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.cardContainer}>
          <FlatList
            data={cardTypes}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            // snapToInterval={280}
            snapToOffsets={[0, 280, 560]}
            contentContainerStyle={{
              // gap: 16,
              paddingRight: 280,
              // paddingHorizontal: 64,
            }}
            renderItem={({ item }) => (
              <View style={{ width: 280 }}>
                <Card type={item.type} accountName={item.accountName} />
              </View>
            )}
          />
          <View style={{ marginTop: 16 }}></View>
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
    paddingVertical: 16,
    backgroundColor: tailwindColors.white,
  },
});
