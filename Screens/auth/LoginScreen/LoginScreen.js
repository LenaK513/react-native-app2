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
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dimensions, setdimensions] = useState(Dimensions.get("window").width);
  const [isInputFocusedEmail, setIsInputFocusedEmail] = useState(false);
  const [isInputFocusedPassword, setIsInputFocusedPassword] = useState(false);
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      console.log(width);
      setdimensions(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);

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
        <Image
          style={styles.image}
          source={require("../../../assets/images/image.png")}
        ></Image>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={10}
        >
          <View
            style={{
              ...styles.form,
              width: dimensions,
            }}
          >
            <Text style={styles.textTitleLogin}>Login</Text>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: isInputFocusedEmail ? "#ffffff" : "#F6F6F6",
                borderColor: isInputFocusedEmail ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Email address"
              placeholderTextColor="#BDBDBD"
              onFocus={() => {
                setIsShowKeyboard(true), setIsInputFocusedEmail(true);
              }}
              onBlur={() => setIsInputFocusedEmail(false)}
              value={email}
              onChangeText={emailHandler}
            />
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor: isInputFocusedPassword
                    ? "#ffffff"
                    : "#F6F6F6",
                  borderColor: isInputFocusedPassword ? "#FF6C00" : "#E8E8E8",
                }}
                secureTextEntry={true}
                placeholder="Enter password"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShowKeyboard(true), setIsInputFocusedPassword(true);
                }}
                onBlur={() => setIsInputFocusedPassword(false)}
                value={password}
                onChangeText={passwordHandler}
              />
            </View>

            <TouchableOpacity style={styles.btn} onPress={onLogin}>
              <Text style={styles.btnText}> log In</Text>
            </TouchableOpacity>
            <Text
              style={styles.textSignup}
              onPress={() => navigation.navigate("Register")}
            >
              Don't have an account?Sign Up
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  form: {
    // position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    top: 360,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
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
    borderColor: "transparent",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    lineHeight: 18.75,
    padding: 16,
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
  textSignup: {
    fontFamily: "r-regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
    alignSelf: "center",
    marginBottom: 159,
  },
});
