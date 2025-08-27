import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Bank App!</Text>
        <Text style={styles.subtitle}>Your financial journey starts here</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Check Balance</Text>
          <Text style={styles.cardText}>View your current account balance</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Transfer Money</Text>
          <Text style={styles.cardText}>Send money to friends and family</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pay Bills</Text>
          <Text style={styles.cardText}>Manage your recurring payments</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <Text style={styles.activityText}>No recent transactions</Text>
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
    backgroundColor: "#007AFF",
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
  card: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  cardText: {
    fontSize: 14,
    color: "#666",
  },
  activityText: {
    fontSize: 16,
    color: "#999",
    fontStyle: "italic",
  },
});
