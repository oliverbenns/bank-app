import { ItemList } from "@/components/item-list";
import { SectionHeader } from "@/components/section-header";
import { TabScreen } from "@/components/tab-screen";
import {
  samplePaymentMethods,
  samplePaymentServices,
} from "@/features/payments/data";
import { PaymentItem } from "@/features/payments/payment-item";

export default () => {
  return (
    <TabScreen>
      <SectionHeader title="Banking Services" />
      <ItemList
        data={samplePaymentServices}
        renderItem={(item) => <PaymentItem {...item} onPress={() => {}} />}
        keyExtractor={(item) => item.id}
      />

      <SectionHeader title="Help & Support" />
      <ItemList
        data={samplePaymentMethods}
        renderItem={(item) => <PaymentItem {...item} onPress={() => {}} />}
        keyExtractor={(item) => item.id}
      />
    </TabScreen>
  );
};
