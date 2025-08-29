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

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

export default function AnalyticsScreen() {
  return (
    <TabScreen>
      <View style={styles.chartContainer}>
        <CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]}>
          {({ points }) => (
            // 👇 and we'll use the Line component to render a line path.
            <Line
              points={points.highTmp}
              color={tailwindColors.blue[500]}
              strokeWidth={3}
            />
          )}
        </CartesianChart>
      </View>

      <SectionHeader title="Spending by Category" />
      <ItemList
        data={sampleSpendingCategories}
        renderItem={(item) => <SpendingItem {...item} />}
      />

      <SectionHeader title="Insights" />
      <ItemList
        data={sampleInsights}
        renderItem={(item) => <InsightItem {...item} />}
      />
    </TabScreen>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    height: 200,
    backgroundColor: tailwindColors.white,
    paddingVertical: 16,
  },

  section: {
    marginTop: 16,
    paddingVertical: 20,
    backgroundColor: tailwindColors.white,
  },

  overviewCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  overviewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  overviewItem: {
    flex: 1,
    alignItems: "center",
  },
  overviewLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  overviewValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  balanceChart: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    height: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartBar: {
    alignItems: "center",
    flex: 1,
  },
  barFill: {
    width: 20,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    marginBottom: 8,
    minHeight: 20,
  },
  chartLabel: {
    fontSize: 12,
    color: "#666",
  },
  insightCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  insightIcon: {
    fontSize: 24,
    marginRight: 12,
    marginTop: 2,
  },
  insightContent: {
    flex: 1,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  insightText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
