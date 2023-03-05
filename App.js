import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/components/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/components/LoginScreen/LoginScreen";
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
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
