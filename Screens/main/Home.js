import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CommentsScreen from "./CommentsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import MapScreen from "./MapScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

const Home = () => {
  return (
    <MainTab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          width: "auto",
          alignItems: "center",
        },

        tabBarItemStyle: {
          borderRadius: 20,
          margin: 5,
          maxWidth: 70,
          minHeight: 40,
        },
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="md-grid-outline" size={24} color={color} />
          ),

          title: "Publications",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "500",
            color: "#212121",
          },
          headerTitleAlign: "center",

          headerRight: () => (
            <Ionicons
              name="exit-outline"
              size={24}
              color="grey"
              style={{ marginRight: 5 }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={24} color={color} />
          ),

          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "500",
            color: "#212121",
          },
          headerTitleAlign: "center",
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "500",
            color: "#212121",
          },
          headerTitleAlign: "center",
        }}
      />
      <MainTab.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />

      <MainTab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
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
// <AntDesign name="delete" size={24} color="black" />
