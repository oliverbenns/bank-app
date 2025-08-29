import { tailwindColors } from "@/theme";
import { StyleSheet, View } from "react-native";

type ItemListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
};

export const ItemList = <T,>({
  data,
  renderItem,
  keyExtractor,
}: ItemListProps<T>) => {
  return (
    <View>
      <View style={styles.list}>
        {data.map((item, index) => {
          const key = keyExtractor(item);

          return (
            <View key={key} style={styles.item}>
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
    backgroundColor: tailwindColors.white,
  },
});
