import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dimensions, setdimensions] = useState(Dimensions.get("window"));
  const [isInputFocusedLogin, setIsInputFocusedLogin] = useState(false);
  const [isInputFocusedEmail, setIsInputFocusedEmail] = useState(false);
  const [isInputFocusedPassword, setIsInputFocusedPassword] = useState(false);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      const height = Dimensions.get("window").height;
      console.log(width);
      console.log(height);
      if (width > height) {
        setdimensions({ orientation: "landscape" });
      } else {
        setdimensions({ orientation: "portrait" });
      }
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
    console.log("credentials", `${login}+${email}+${password}`);
    setLogin(""), setEmail(""), setPassword("");
  };

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBG}
          source={require("../../../assets/images/image.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-100}
          >
            <View
              style={{
                ...styles.form,
                // width: dimensions,
              }}
            >
              <View style={styles.photoBox}>
                <Image
                  style={styles.iconImage}
                  source={require("../../../assets/images/add.png")}
                />
              </View>
              <Text style={styles.titleText}>{"\n"}Registration</Text>
              <TextInput
                value={login}
                onChangeText={loginHandler}
                style={{
                  ...styles.input,
                  backgroundColor: isInputFocusedLogin ? "#ffffff" : "#F6F6F6",
                  borderColor: isInputFocusedLogin ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShowKeyboard(true), setIsInputFocusedLogin(true);
                }}
                onBlur={() => setIsInputFocusedLogin(false)}
              />
              <TextInput
                value={email}
                onChangeText={emailHandler}
                style={{
                  ...styles.input,
                  backgroundColor: isInputFocusedEmail ? "#ffffff" : "#F6F6F6",
                  borderColor: isInputFocusedEmail ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Email address"
                placeholderTextColor="#BDBDBD"
                keyboardType="email-address"
                onFocus={() => {
                  setIsShowKeyboard(true), setIsInputFocusedEmail(true);
                }}
                onBlur={() => setIsInputFocusedEmail(false)}
              />
              <View>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  style={{
                    ...styles.inputPassword,
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
                />
                <TouchableOpacity style={styles.showPasswordButton}>
                  <Text style={styles.showPasswordButton__text}></Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.btn} onPress={onLogin}>
                <Text style={styles.btnTitle}>Sign up</Text>
              </TouchableOpacity>

              <Text
                style={styles.loginText}
                onPress={() => navigation.navigate("Login")}
              >
                {"\n"}
                Have already had an account? Login
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
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingBottom: 45,
  },
  photoBox: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    alignSelf: "center",
    left: "50%",
    top: 0,
    zIndex: 2,
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  iconImage: {
    position: "absolute",
    height: 25,
    width: 25,
    right: "-9%",
    bottom: "9%",
  },
  titleText: {
    fontFamily: "r-bold",
    fontSize: 30,
    color: "#212121",
    textAlign: "center",
    lineHeight: 35.16,
    letterSpacing: 1,
    marginBottom: 32,
    marginTop: 64,
  },
  input: {
    fontFamily: "r-regular",
    fontSize: 16,
    height: 50,
    borderRadius: 8,
    // backgroundColor: "#F6F6F6",
    // borderColor: "#E8E8E8",
    // borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    lineHeight: 18.75,
  },
  inputPassword: {
    fontFamily: "r-regular",
    fontSize: 16,
    height: 50,
    borderRadius: 8,
    // backgroundColor: "#F6F6F6",
    // borderColor: "#E8E8E8",
    // borderStyle: "solid",
    borderWidth: 1,
    padding: 16,
    lineHeight: 18.75,
  },
  showPasswordButton: {
    position: "absolute",
    right: 16,
    top: "30%",
  },
  showPasswordButton__text: {
    fontSize: 16,
    fontFamily: "r-regular",
    fontWeight: "400",
    lineHeight: 19,
    color: "#1B4371",
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
  btnTitle: {
    fontFamily: "r-regular",
    fontWeight: "400",
    fontSize: 16,
    color: "#ffffff",
    lineHeight: 19,
  },
  loginText: {
    fontFamily: "r-regular",
    fontWeight: "400",
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
    lineHeight: 19,
    // marginBottom: 45,
  },
});
