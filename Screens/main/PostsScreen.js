import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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
              title="go to Comments"
              onPress={() => navigation.navigate("CommentsScreen")}
            >
              <Feather name="message-circle" size={24} color="black" />
            </Text>
            <Text
              title="go to map"
              onPress={() => navigation.navigate("MapScreen")}
            >
              <AntDesign name="enviromento" size={24} color="black" />
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
