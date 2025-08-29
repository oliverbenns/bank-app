import { TabScreen } from "@/components/tab-screen";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ExploreScreen() {
  return (
    <TabScreen>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Banking Services</Text>

        <TouchableOpacity style={styles.serviceCard}>
          <Text style={styles.serviceIcon}>💳</Text>
          <View style={styles.serviceContent}>
            <Text style={styles.serviceTitle}>Credit Cards</Text>
            <Text style={styles.serviceDescription}>
              Apply for new cards and manage existing ones
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceCard}>
          <Text style={styles.serviceIcon}>🏦</Text>
          <View style={styles.serviceContent}>
            <Text style={styles.serviceTitle}>Loans</Text>
            <Text style={styles.serviceDescription}>
              Personal, auto, and home loan options
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceCard}>
          <Text style={styles.serviceIcon}>📊</Text>
          <View style={styles.serviceContent}>
            <Text style={styles.serviceTitle}>Investments</Text>
            <Text style={styles.serviceDescription}>
              Grow your wealth with smart investments
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceCard}>
          <Text style={styles.serviceIcon}>🛡️</Text>
          <View style={styles.serviceContent}>
            <Text style={styles.serviceTitle}>Insurance</Text>
            <Text style={styles.serviceDescription}>
              Protect what matters most
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Help & Support</Text>
        <TouchableOpacity style={styles.helpCard}>
          <Text style={styles.helpTitle}>Contact Us</Text>
          <Text style={styles.helpText}>
            Get in touch with our support team
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpCard}>
          <Text style={styles.helpTitle}>FAQ</Text>
          <Text style={styles.helpText}>Find answers to common questions</Text>
        </TouchableOpacity>
      </View>
    </TabScreen>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333",
  },
  serviceCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  serviceDescription: {
    fontSize: 14,
    color: "#666",
  },
  helpCard: {
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
  helpTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  helpText: {
    fontSize: 14,
    color: "#666",
  },
});
