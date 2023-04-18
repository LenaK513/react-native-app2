import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
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
      <Text title="go to map" onPress={() => navigation.navigate("MapScreen")}>
        Map
      </Text>
      <Text
        title="go to Comments"
        onPress={() => navigation.navigate("CommentsScreen")}
      >
        Comments
      </Text>
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
