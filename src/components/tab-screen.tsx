import { colors } from "@/theme";
import { ScrollView, StyleSheet } from "react-native";

type TabScreenProps = {
  children: React.ReactNode;
};

export const TabScreen = ({ children }: TabScreenProps) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
    marginBottom: 80,
  },
});
