import { Stack } from "expo-router";
import './global.css';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'

// function RootLayoutNav() {
//   return (
//     <ClerkProvider>
//       <Slot />
//     </ClerkProvider>
//   )
// }

export default function RootLayout() {

  // const [loaded] = useFonts({
  //   "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
  //   "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
  //   "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
  //   "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  //   "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
  //   Jakarta: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
  //   "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Slot />
    {/* <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack> */}
    </ClerkProvider>
  );
}
