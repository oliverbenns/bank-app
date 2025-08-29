import { colors } from "@/theme";
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
    color: colors.green[500],
    icon: CheckCircle,
  },
  warn: {
    color: colors.yellow[500],
    icon: AlertCircle,
  },
  idea: {
    color: colors.blue[500],
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
    gap: 2,
    flex: 1,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.gray[800],
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: colors.gray[500],
    width: "100%",
  },
  icon: {
    width: 44,
    height: 44,
    alignItems: "center",
    marginRight: 12,
  },
});
