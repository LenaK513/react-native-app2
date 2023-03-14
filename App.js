import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";

import { useRoute } from "./router";

export default function App() {
  const routing = useRoute(null);

  const [fontsLoaded] = useFonts({
    "r-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "r-light": require("./assets/fonts/Roboto-Light.ttf"),
    "r-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
