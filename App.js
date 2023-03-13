import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/auth/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen/LoginScreen";

const AuthStack = createStackNavigator();

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
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Register" component={RegistrationScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
