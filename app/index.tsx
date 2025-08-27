import { Redirect } from "expo-router";

export default function Index() {
  // Check if authed here. if yes, redirect to /(tabs), else redirect to /(auth)/login.
  return <Redirect href="/(auth)/login" />;
}
