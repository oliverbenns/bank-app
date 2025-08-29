import { ItemList } from "@/components/item-list";
import { SectionHeader } from "@/components/section-header";
import { TabScreen } from "@/components/tab-screen";
import {
  samplePaymentMethods,
  samplePaymentServices,
} from "@/features/payments/data";
import { PaymentItem } from "@/features/payments/payment-item";
import { Linking } from "react-native";

export default () => {
  const handleServicePress = (serviceId: string) => {
    // In a real app, this would navigate to the specific service
    console.log("Navigate to service:", serviceId);
  };

  const handleSupportPress = (methodId: string) => {
    // In a real app, this would handle different support methods
    if (methodId === "1") {
      Linking.openURL("mailto:support@bankapp.com");
    } else {
      console.log("Navigate to FAQ");
    }
  };

  return (
    <TabScreen>
      <SectionHeader title="Banking Services" />
      <ItemList
        data={samplePaymentServices}
        renderItem={(item) => (
          <PaymentItem {...item} onPress={() => handleServicePress(item.id)} />
        )}
        keyExtractor={(item) => item.id}
      />

      <SectionHeader title="Help & Support" />
      <ItemList
        data={samplePaymentMethods}
        renderItem={(item) => (
          <PaymentItem {...item} onPress={() => handleSupportPress(item.id)} />
        )}
        keyExtractor={(item) => item.id}
      />
    </TabScreen>
  );
};
