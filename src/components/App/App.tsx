import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import firebaseApp from "../../api/firebase";
import MainNavigation from "../navigations/Natigation";

import { FIREBASE_CONFIG } from "react-native-dotenv";

export default function App() {
  // console.log("hi!: ", firebaseApp);
  // console.log("firebaseConfig: ", FIREBASE_CONFIG);
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
