import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen
          name="products"
          options={{ title: "Products", headerBackVisible: false }}
        />
        <Stack.Screen
          name="product/[id]"
          options={{ title: "Product Details" }}
        />
        <Stack.Screen
          name="product/edit/[id]"
          options={{ title: "Edit Product" }}
        />
        <Stack.Screen name="product/add" options={{ title: "Add Product" }} />
      </Stack>
    </AuthProvider>
  );
}
