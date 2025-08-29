import { colors } from "@/theme";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default () => {
  const router = useRouter();

  const onLogin = () => {
    // For now, just navigate to the home screen
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 48,
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.blue[600],
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
