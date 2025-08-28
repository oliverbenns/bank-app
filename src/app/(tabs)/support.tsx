import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SupportScreen() {
  const handleContactSupport = () => {
    // In a real app, this would open a chat or call support
    Linking.openURL("mailto:support@bankapp.com");
  };

  const handleFAQ = () => {
    // In a real app, this would navigate to FAQ section
    console.log("Navigate to FAQ");
  };

  const handleLiveChat = () => {
    // In a real app, this would open live chat
    console.log("Open live chat");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get Help</Text>

        <TouchableOpacity style={styles.supportCard} onPress={handleLiveChat}>
          <Text style={styles.supportIcon}>💬</Text>
          <View style={styles.supportContent}>
            <Text style={styles.supportTitle}>Live Chat</Text>
            <Text style={styles.supportDescription}>
              Chat with our support team 24/7
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.supportCard}
          onPress={handleContactSupport}
        >
          <Text style={styles.supportIcon}>📧</Text>
          <View style={styles.supportContent}>
            <Text style={styles.supportTitle}>Email Support</Text>
            <Text style={styles.supportDescription}>
              Send us a detailed message
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.supportCard}>
          <Text style={styles.supportIcon}>📞</Text>
          <View style={styles.supportContent}>
            <Text style={styles.supportTitle}>Call Us</Text>
            <Text style={styles.supportDescription}>
              1-800-BANK-APP (Available 8AM-8PM)
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Self-Service</Text>

        <TouchableOpacity style={styles.supportCard} onPress={handleFAQ}>
          <Text style={styles.supportIcon}>❓</Text>
          <View style={styles.supportContent}>
            <Text style={styles.supportTitle}>FAQ</Text>
            <Text style={styles.supportDescription}>
              Find answers to common questions
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.supportCard}>
          <Text style={styles.supportIcon}>📱</Text>
          <View style={styles.supportContent}>
            <Text style={styles.supportTitle}>App Tutorial</Text>
            <Text style={styles.supportDescription}>
              Learn how to use the app
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency</Text>
        <TouchableOpacity style={styles.emergencyCard}>
          <Text style={styles.emergencyIcon}>🚨</Text>
          <View style={styles.emergencyContent}>
            <Text style={styles.emergencyTitle}>Report Fraud</Text>
            <Text style={styles.emergencyText}>
              Immediately report suspicious activity
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
  supportCard: {
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
  supportIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  supportContent: {
    flex: 1,
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  supportDescription: {
    fontSize: 14,
    color: "#666",
  },
  emergencyCard: {
    backgroundColor: "#FF3B30",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  emergencyIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  emergencyContent: {
    flex: 1,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "white",
  },
  emergencyText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
});
