import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const Main = () => {
  const [user, setUser] = useState(null);

  const state = useSelector((state) => state);
  console.log(state);

  onAuthStateChanged(auth, (user) => setUser(user));
  const routing = useRoute(user);
  useEffect(() => {}, []);
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
