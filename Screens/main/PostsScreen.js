import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import CommentsScreen from "./CommentsScreen";
// import CreatePostsScreen from "./CreatePostsScreen";
// import MapScreen from "./MapScreen";

// import ProfileScreen from "./ProfileScreen";

// const MainTab = createBottomTabNavigator();

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
    console.log("posts", posts);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.imagesContainer}>
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
            <Text
              title="go to map"
              onPress={() => navigation.navigate("MapScreen")}
            >
              Map
            </Text>
            <Text
              title="go to Comments"
              onPress={() => navigation.navigate("CommentsScreen")}
            >
              Comments
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  imagesContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default PostsScreen;
