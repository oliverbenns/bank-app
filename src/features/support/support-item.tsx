import { colors } from "@/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SupportOption } from "./data";

interface SupportItemProps extends SupportOption {
  onPress?: () => void;
}

export const SupportItem = ({
  title,
  description,
  icon,
  onPress,
}: SupportItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.blue[600],
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.white,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: colors.gray[500],
    lineHeight: 18,
  },
});
