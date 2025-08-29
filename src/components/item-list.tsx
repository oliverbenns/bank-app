import { tailwindColors } from "@/theme";
import { StyleSheet, View } from "react-native";

type ItemListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export const ItemList = <T,>({ data, renderItem }: ItemListProps<T>) => {
  return (
    <View>
      <View style={styles.list}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.item}>
              {renderItem(item, index)}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 1,
    backgroundColor: tailwindColors.gray[100],
  },
  item: {
    padding: 16,
    backgroundColor: "white",
  },
});
