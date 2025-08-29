import { tailwindColors } from "@/theme";
import { StyleSheet, View } from "react-native";

type ProgressBarProps = {
  value: number;
};

export const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <View style={[styles.bar]}>
      <View
        style={[
          styles.fill,
          {
            width: `${value}%`,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    borderRadius: 4,
    height: 8,
    backgroundColor: tailwindColors.gray[100],
  },
  fill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: tailwindColors.blue[500],
  },
});
