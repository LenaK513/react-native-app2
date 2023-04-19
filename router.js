import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/auth/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen/LoginScreen";
import Home from "./Screens/main/Home";

const AuthStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return <Home />;
};
