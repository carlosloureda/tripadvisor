import React from "react";
import { StyleSheet, Alert, View } from "react-native";
import * as Facebook from "expo-facebook";
import { FACEBOOK_API_APP_ID, APP_NAME } from "react-native-dotenv";
import Toast from "react-native-tiny-toast";
import Loading from "./../../../../../Loaders/Loading";
import { withNavigation } from "@react-navigation/compat";
import * as firebase from "firebase";
import { SocialIcon } from "react-native-elements";

const LoginFacebook = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const login = async () => {
    setIsLoading(true);
    try {
      await Facebook.initializeAsync(FACEBOOK_API_APP_ID, APP_NAME);
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });
      if (type === "success") {
        // console.log("token: ", token);
        const credentials = firebase.auth.FacebookAuthProvider.credential(
          token
        );

        let response = await firebase.auth().signInWithCredential(credentials);
        if (response) {
          navigation.navigate("Account");
        }
      } else if (type === "cancel") {
        Toast.show(`Login cancelled`, {
          position: Toast.position.CENTER
        });
      }
    } catch (error) {
      Toast.show(`Facebook Login Error: ${error.message}`, {
        position: Toast.position.CENTER
      });
      // console.log(
      //   `Facebook Login Error: ${error.message} - Code: ${error.code}`
      // );
    }
    setIsLoading(false);
  };
  return (
    <>
      <SocialIcon
        title="Sign In With Facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading isVisible={isLoading} text="Loging in ..." />
    </>
  );
};

export default withNavigation(LoginFacebook);

const styles = StyleSheet.create({});
