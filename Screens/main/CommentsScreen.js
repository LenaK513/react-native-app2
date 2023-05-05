import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comments, setComments] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { login } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPost();
  }, []);

  const inputHandler = (text) => setComments(text);

  const createPost = async () => {
    try {
      await addDoc(collection(db, "posts", postId, "comments"), {
        comment: {
          login,
          comments,
        },
      });
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const getAllPost = async () => {
    try {
      const allPosts = await getDocs(
        collection(db, "posts", postId, "comments")
      );
      setAllComments(
        allPosts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setComments(comments);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text>{item.comment.login}</Text>
              <Text>{item.comment.comments}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="write a comment"
        placeholderTextColor="#BDBDBD"
        value={comments}
        onChangeText={inputHandler}
      />

      <TouchableOpacity style={styles.btn} onPress={createPost}>
        <AntDesign name="arrowup" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  commentContainer: {
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "rgba(0,0,0,0.06)",

    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  input: {
    fontFamily: "r-regular",
    fontSize: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "transparent",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    lineHeight: 18.75,
    paddingLeft: 20,
    marginBottom: 20,
  },

  btn: {
    position: "absolute",
    bottom: 22,
    right: 20,
    backgroundColor: "#FF6C00",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: "50%",
  },
  btnText: {
    fontFamily: "r-regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#ffffff",
  },
});

export default CommentsScreen;
