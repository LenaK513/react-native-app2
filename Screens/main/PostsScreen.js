import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const getAllPost = async () => {
    const allPosts = await getDocs(collection(db, "posts"));
    setPosts(allPosts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getAllPost();
  }, []);

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
            <View style={{ alignSelf: "flex-start", marginLeft: 30 }}>
              <Text style={styles.titleText}>{item.comment}</Text>
            </View>
            <Text
              title="go to Comments"
              onPress={() =>
                navigation.navigate("CommentsScreen", { postId: item.id })
              }
            >
              <Feather name="message-circle" size={24} color="black" />
            </Text>
            <Text
              title="go to map"
              onPress={() =>
                navigation.navigate("MapScreen", { location: item.location })
              }
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
  titleText: {
    fontFamily: "r-bold",
    fontSize: 16,
    color: "#121212",
    lineHeight: 18.75,
  },
});

export default PostsScreen;
