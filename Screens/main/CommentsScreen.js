import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comments, setComments] = useState("");
  const { login } = useSelector((state) => state.auth);

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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputArea}
        placeholder="write a comment"
        placeholderTextColor="#BDBDBD"
        value={comments}
        onChangeText={inputHandler}
      />

      <TouchableOpacity style={styles.btn} onPress={createPost}>
        <Text style={styles.btnText}> add post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    fontFamily: "r-regular",
    fontSize: 16,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    lineHeight: 18.75,
    padding: 16,
  },
  inputArea: {
    fontFamily: "r-regular",
    fontSize: 16,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    lineHeight: 18.75,
    paddingLeft: 40,
    position: "relative",
  },
  btn: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    marginBottom: 16,
  },
  btnText: {
    fontFamily: "r-regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#ffffff",
  },
});

export default CommentsScreen;
