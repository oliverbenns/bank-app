import { tailwindColors } from "@/theme";
import {
  CreditCard,
  LucideIcon,
  Send,
  Snowflake,
  TrendingUp,
} from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ControlButton = {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  onPress: () => void;
};

const controls: ControlButton[] = [
  {
    id: "topup",
    title: "Top Up",
    icon: TrendingUp,
    color: tailwindColors.green[500],
    onPress: () => console.log("Top Up pressed"),
  },
  {
    id: "send",
    title: "Send",
    icon: Send,
    color: tailwindColors.blue[500],
    onPress: () => console.log("Send pressed"),
  },
  {
    id: "pay",
    title: "Pay",
    icon: CreditCard,
    color: tailwindColors.purple[500],
    onPress: () => console.log("Pay pressed"),
  },
  {
    id: "freeze",
    title: "Freeze",
    icon: Snowflake,
    color: tailwindColors.red[500],
    onPress: () => console.log("Freeze pressed"),
  },
];

export function CardControls() {
  return (
    <View style={styles.container}>
      {controls.map((control) => (
        <TouchableOpacity
          key={control.id}
          style={styles.button}
          onPress={control.onPress}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.iconContainer,
              {
                borderWidth: 1,
                borderColor: tailwindColors.gray[300],
              },
            ]}
          >
            <control.icon size={21} color={tailwindColors.blue[500]} />
          </View>
          <Text style={styles.buttonText}>{control.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 20,
  },
  button: {
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    color: tailwindColors.gray[700],
    textAlign: "center",
  },
});
