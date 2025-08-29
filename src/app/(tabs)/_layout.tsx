import { tailwindColors } from "@/theme";
import { Tabs } from "expo-router";
import { BarChart3, CreditCard, HelpCircle, Home } from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tailwindColors.blue[600],
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color }) => <BarChart3 size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => <CreditCard size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          tabBarIcon: ({ color }) => <HelpCircle size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};
