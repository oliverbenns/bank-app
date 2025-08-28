import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AnalyticsScreen() {
  // Mock data - in a real app this would come from your backend
  const spendingData = [
    { category: "Food & Dining", amount: 245.67, percentage: 35 },
    { category: "Transportation", amount: 189.23, percentage: 27 },
    { category: "Shopping", amount: 156.89, percentage: 22 },
    { category: "Entertainment", amount: 89.45, percentage: 13 },
    { category: "Other", amount: 23.76, percentage: 3 },
  ];

  const monthlyBalance = [
    { month: "Jan", balance: 12500 },
    { month: "Feb", balance: 11800 },
    { month: "Mar", balance: 13200 },
    { month: "Apr", balance: 14100 },
    { month: "May", balance: 13800 },
    { month: "Jun", balance: 15200 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Analytics</Text>
        <Text style={styles.subtitle}>Your financial insights</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monthly Overview</Text>
        <View style={styles.overviewCard}>
          <View style={styles.overviewRow}>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewLabel}>Current Balance</Text>
              <Text style={styles.overviewValue}>$15,200</Text>
            </View>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewLabel}>Monthly Spending</Text>
              <Text style={styles.overviewValue}>$704.00</Text>
            </View>
          </View>
          <View style={styles.overviewRow}>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewLabel}>Income</Text>
              <Text style={styles.overviewValue}>$3,200</Text>
            </View>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewLabel}>Savings Rate</Text>
              <Text style={styles.overviewValue}>78%</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Spending by Category</Text>
        {spendingData.map((item, index) => (
          <View key={index} style={styles.categoryCard}>
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>{item.category}</Text>
              <Text style={styles.categoryAmount}>
                ${item.amount.toFixed(2)}
              </Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { width: `${item.percentage}%` }]}
              />
            </View>
            <Text style={styles.categoryPercentage}>{item.percentage}%</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Balance Trend</Text>
        <View style={styles.balanceChart}>
          {monthlyBalance.map((item, index) => (
            <View key={index} style={styles.chartBar}>
              <View
                style={[
                  styles.barFill,
                  { height: (item.balance / 16000) * 100 },
                ]}
              />
              <Text style={styles.chartLabel}>{item.month}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Insights</Text>
        <View style={styles.insightCard}>
          <Text style={styles.insightIcon}>💡</Text>
          <View style={styles.insightContent}>
            <Text style={styles.insightTitle}>Great job on savings!</Text>
            <Text style={styles.insightText}>
              You're saving 78% of your income this month, which is above the
              recommended 20%.
            </Text>
          </View>
        </View>
        <View style={styles.insightCard}>
          <Text style={styles.insightIcon}>⚠️</Text>
          <View style={styles.insightContent}>
            <Text style={styles.insightTitle}>Food spending increased</Text>
            <Text style={styles.insightText}>
              Your food spending is 15% higher than last month. Consider setting
              a budget.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#5856D6",
    padding: 40,
    paddingTop: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333",
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
  categoryCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E5E5EA",
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 4,
  },
  categoryPercentage: {
    fontSize: 14,
    color: "#666",
    textAlign: "right",
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
