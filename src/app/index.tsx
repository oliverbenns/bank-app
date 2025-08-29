import { Redirect } from "expo-router";

export default () => {
  // Check if authed here. if yes, redirect to /(tabs), else redirect to /(auth)/login.
  return <Redirect href="/(auth)/login" />;
};
