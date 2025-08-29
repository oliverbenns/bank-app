import { colors } from "@/theme";
import { CreditCard, LucideIcon, Send, Snowflake } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ControlButton = {
  id: string;
  title: string;
  icon: LucideIcon;

  onPress: () => void;
};

const controls: ControlButton[] = [
  {
    id: "send",
    title: "Send",
    icon: Send,
    onPress: () => console.log("Send pressed"),
  },
  {
    id: "pay",
    title: "Pay",
    icon: CreditCard,
    onPress: () => console.log("Pay pressed"),
  },
  {
    id: "freeze",
    title: "Freeze",
    icon: Snowflake,
    onPress: () => console.log("Freeze pressed"),
  },
];

export const CardControls = () => {
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
                borderColor: colors.gray[300],
              },
            ]}
          >
            <control.icon size={21} color={colors.blue[500]} />
          </View>
          <Text style={styles.buttonText}>{control.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 24,
    marginHorizontal: "auto",
  },
  button: {
    alignItems: "center",
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
    color: colors.gray[700],
    textAlign: "center",
  },
});
