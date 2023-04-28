import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { store } from "./redux/store";

import Main from "./components/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "r-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "r-light": require("./assets/fonts/Roboto-Light.ttf"),
    "r-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
