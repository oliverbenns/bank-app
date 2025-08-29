import { tailwindColors } from "@/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    // padding: 24,
    backgroundColor: tailwindColors.white,
  },

  button: {
    backgroundColor: tailwindColors.blue[600],
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: tailwindColors.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
