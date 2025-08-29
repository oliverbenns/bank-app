import { ItemList } from "@/components/item-list";
import { SectionHeader } from "@/components/section-header";
import { TabScreen } from "@/components/tab-screen";
import { sampleSupportOptions } from "@/features/support/data";
import { SupportItem } from "@/features/support/support-item";

const helpOptions = sampleSupportOptions.filter(
  (o) => o.category === "Get Help"
);
const selfServiceOptions = sampleSupportOptions.filter(
  (o) => o.category === "Self-Service"
);

export default () => {
  return (
    <TabScreen>
      <SectionHeader title="Get Help" />
      <ItemList
        data={helpOptions}
        renderItem={(item) => <SupportItem {...item} onPress={() => {}} />}
        keyExtractor={(item) => item.id}
      />

      <SectionHeader title="Self-Service" />
      <ItemList
        data={selfServiceOptions}
        renderItem={(item) => <SupportItem {...item} onPress={() => {}} />}
        keyExtractor={(item) => item.id}
      />
    </TabScreen>
  );
};
