import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      // const coords = {
      //   latitude: location.coords.latitude,
      //   longitude: location.coords.longitude,
      // };
      console.log("latitude", location.coords.latitude);
      console.log("longitude", location.coords.longitude);
    })();
  }, []);

  const takePicture = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPicture = async () => {
    console.log("navigation", navigation);
    navigation.navigate("PostsScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: photo }} />
      </View>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} ref={setCamera}>
          <TouchableOpacity onPress={takePicture} style={styles.iconContainer}>
            <AntDesign
              name="camerao"
              size={30}
              color="#E8E8E8"
              style={styles.icon}
            />
          </TouchableOpacity>
        </Camera>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        // keyboardVerticalOffset={1}
      >
        <View style={styles.form}>
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

          <TouchableOpacity style={styles.btn} onPress={sendPicture}>
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
  cameraContainer: {
    // height: 267,
    // marginHorizontal: 16,
    // marginTop: 32,
    // // justifyContent: "center",
    // // alignItems: "center",
    // backgroundColor: "#E8E8E8",
    // borderRadius: 10,
  },
  camera: {
    height: 267,
    marginHorizontal: 16,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
  },
  iconContainer: {
    color: "#E8E8E8",
    borderColor: "#fff",
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
  // mapStyle: {
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,
  // },
});

export default CreatePostsScreen;
