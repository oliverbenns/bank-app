import { ItemList } from "@/components/item-list";
import { SectionHeader } from "@/components/section-header";
import { TabScreen } from "@/components/tab-screen";
import { Card } from "@/features/transactions/card";
import { CardControls } from "@/features/transactions/card-controls";
import { sampleTransactions } from "@/features/transactions/data";
import { TransactionItem } from "@/features/transactions/transaction-item";
import { colors } from "@/theme";
import { FlatList, StyleSheet, View } from "react-native";

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

export default () => {
  return (
    <TabScreen>
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
        <CardControls />
      </View>

      <SectionHeader title="Activity" onViewAllPress={() => {}} />
      <ItemList
        data={sampleTransactions}
        renderItem={(item) => <TransactionItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </TabScreen>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
});
