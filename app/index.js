import { Redirect } from "expo-router";

export default function Home() {
  // Redirect to the login page
  return <Redirect href="/login" />;
}
