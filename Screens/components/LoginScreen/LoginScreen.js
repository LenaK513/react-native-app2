import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onLogin = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("credentials", `+${email}+${password}`);
    setEmail(""), setPassword("");
  };

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/images/image.png")}
        >
          <KeyboardAvoidingView behavior={Platform.OS == "ios" && "padding"}>
            <View style={styles.form}>
              <Text style={styles.textTitleLogin}>Login</Text>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsShowKeyboard(true)}
                value={email}
                onChangeText={emailHandler}
              />
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Enter password"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={password}
                  onChangeText={passwordHandler}
                />
              </View>

              <TouchableOpacity
                style={styles.btn}
                // style={{ ...styles.btn, marginTop: isShowKeyboard ? 43 : 10 }}
                onPress={onLogin}
              >
                <Text style={styles.btnText}> log In</Text>
              </TouchableOpacity>
              <Text style={styles.textSignup}>
                Don't have an account?Sign Up
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
  },
  textTitleLogin: {
    fontFamily: "r-bold",
    fontSize: 30,
    lineHeight: 35.16,
    alignSelf: "center",
    letterSpacing: 1,
    paddingTop: 32,
    paddingBottom: 32,
  },
  input: {
    fontFamily: "r-regular",
    fontSize: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    // marginHorizontal: 16,
    lineHeight: 18.75,
    padding: 16,
  },
  btn: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 16,
    marginTop: 43,
    marginBottom: 16,
  },
  btnText: {
    fontFamily: "r-regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#ffffff",
  },
  textSignup: {
    fontFamily: "r-regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
    alignSelf: "center",
    marginBottom: 144,
  },
});
