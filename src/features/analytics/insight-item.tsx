import { tailwindColors } from "@/theme";
import {
  AlertCircle,
  CheckCircle,
  Lightbulb,
  LucideIcon,
} from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { Insight, InsightType } from "./model";

type InsightIcon = {
  color: string;
  icon: LucideIcon;
};

const iconsByType: Record<InsightType, InsightIcon> = {
  success: {
    color: tailwindColors.green[500],
    icon: CheckCircle,
  },
  warn: {
    color: tailwindColors.yellow[500],
    icon: AlertCircle,
  },
  idea: {
    color: tailwindColors.blue[500],
    icon: Lightbulb,
  },
};

type InsightItemProps = Insight;

export const InsightItem = ({ title, description, type }: InsightItemProps) => {
  const insightIcon = iconsByType[type];

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <insightIcon.icon size={32} color={insightIcon.color} />
      </View>
      <View style={styles.meta}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  meta: {
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: tailwindColors.gray[800],
  },
  description: {
    fontSize: 12,
    color: tailwindColors.gray[500],
  },
  icon: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
});
