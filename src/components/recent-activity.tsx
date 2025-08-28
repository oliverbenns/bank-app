import { StyleSheet, Text, View } from "react-native";

export const RecentActivity = () => {
  const activities = [
    {
      type: "Payment",
      description: "Netflix Subscription",
      amount: "-$15.99",
      time: "2 hours ago",
    },
    {
      type: "Deposit",
      description: "Salary Deposit",
      amount: "+$3,200.00",
      time: "1 day ago",
    },
    {
      type: "Transfer",
      description: "To Savings",
      amount: "-$500.00",
      time: "2 days ago",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
      {activities.map((activity, index) => (
        <View key={index} style={styles.activityItem}>
          <View style={styles.activityInfo}>
            <Text style={styles.activityType}>{activity.type}</Text>
            <Text style={styles.activityDescription}>
              {activity.description}
            </Text>
            <Text style={styles.activityTime}>{activity.time}</Text>
          </View>
          <Text
            style={[
              styles.activityAmount,
              {
                color: activity.amount.startsWith("+") ? "#34C759" : "#FF3B30",
              },
            ]}
          >
            {activity.amount}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333",
  },
  activityItem: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityInfo: {
    flex: 1,
  },
  activityType: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 12,
    color: "#999",
  },
  activityAmount: {
    fontSize: 18,
    fontWeight: "600",
  },
});
