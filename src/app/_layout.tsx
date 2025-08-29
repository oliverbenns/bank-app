import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
};
