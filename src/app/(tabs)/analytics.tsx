import { ItemList } from "@/components/item-list";
import { SectionHeader } from "@/components/section-header";
import { TabScreen } from "@/components/tab-screen";
import {
  sampleInsights,
  sampleSpendingCategories,
} from "@/features/analytics/data";
import { InsightItem } from "@/features/analytics/insight-item";
import { SpendingItem } from "@/features/analytics/spending-item";
import { tailwindColors } from "@/theme";
import { StyleSheet, View } from "react-native";
import { CartesianChart, Line } from "victory-native";

const chartData = Array.from({ length: 16 }, (_, i) => ({
  day: i,
  amount: 40 + 30 * Math.random(),
}));

export default () => {
  return (
    <TabScreen>
      <View style={styles.chartContainer}>
        <CartesianChart data={chartData} xKey="day" yKeys={["amount"]}>
          {({ points }) => (
            // 👇 and we'll use the Line component to render a line path.
            <Line
              points={points.amount}
              color={tailwindColors.blue[500]}
              strokeWidth={3}
              curveType="monotoneX"
            />
          )}
        </CartesianChart>
      </View>

      <SectionHeader title="Spending by Category" />
      <ItemList
        data={sampleSpendingCategories}
        renderItem={(item) => <SpendingItem {...item} />}
        keyExtractor={(item) => item.category}
      />

      <SectionHeader title="Insights" />
      <ItemList
        data={sampleInsights}
        renderItem={(item) => <InsightItem {...item} />}
        keyExtractor={(item) => item.title}
      />
    </TabScreen>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    height: 200,
    backgroundColor: tailwindColors.white,
    paddingVertical: 16,
  },
});
