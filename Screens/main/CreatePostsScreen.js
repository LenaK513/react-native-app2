import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Camera } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
          <AntDesign
            name="camerao"
            size={30}
            color="#E8E8E8"
            style={styles.icon}
          />
        </TouchableOpacity>
      </Camera>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-18}
      >
        <View
          style={styles.form}
          // style={{
          //   ...styles.form,
          //   width: dimensions,
          // }}
        >
          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="#BDBDBD"
          />
          <View style={styles.areaContainer}>
            <SimpleLineIcons
              name="location-pin"
              size={24}
              color="#BDBDBD"
              style={styles.areaIcon}
            />
            <TextInput
              style={styles.inputArea}
              placeholder="Area"
              placeholderTextColor="#BDBDBD"
            />
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}> Post</Text>
          </TouchableOpacity>
          {/* <Text
            style={styles.textSignup}
            onPress={() => navigation.navigate("Register")}
          >
            Don't have an account?Sign Up
          </Text> */}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  camera: {
    height: 267,
    marginHorizontal: 16,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    color: "#E8E8E8",
    borderColor: "#000",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 9,
  },
  form: {
    marginHorizontal: 16,
    marginTop: 32,
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

  areaContainer: {
    marginTop: 16,
    justifyContent: "space-evenly",
  },
  areaIcon: {
    position: "absolute",
    left: 10,
    bottom: 16,
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

export default CreatePostsScreen;
