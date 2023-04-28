import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";

import { authSignOutUser } from "../../redux/auth/authOperations";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
  };
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
      <TouchableOpacity style={styles.btn} onPress={signOut}>
        <Text style={styles.btnText}>signOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transarent",
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

export default ProfileScreen;
