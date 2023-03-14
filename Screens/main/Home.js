import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";

import CommentsScreen from "./CommentsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import MapScreen from "./MapScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

const Home = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="CommentsScreen" component={CommentsScreen} />
      <MainTab.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <MainTab.Screen name="MapScreen" component={MapScreen} />
      <MainTab.Screen name="PostsScreen" component={PostsScreen} />
      <MainTab.Screen name="ProfileScreen" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   title: {
//     alignItems: "center",
//   },
// });

export default Home;

// import { Feather } from "@expo/vector-icons";
// <Feather name="user" size={24} color="black" />;

// <Feather name="plus" size={24} color="black" />;
// <Feather name="message-circle" size={24} color="black" />

// import { Ionicons } from "@expo/vector-icons";
// <Ionicons name="md-grid-outline" size={24} color="black" />;
// <Ionicons name="exit-outline" size={24} color="black" />

// import { SimpleLineIcons } from "@expo/vector-icons";
// <SimpleLineIcons name="location-pin" size={24} color="black" />

// import { AntDesign } from "@expo/vector-icons";
// <AntDesign name="arrowleft" size={24} color="black" />
// <AntDesign name="arrowup" size={24} color="black" />
// <AntDesign name="like2" size={24} color="black" />
