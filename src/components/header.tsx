import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome back, Oliver!</Text>
      <Text style={styles.subtitle}>Here's your financial overview</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
