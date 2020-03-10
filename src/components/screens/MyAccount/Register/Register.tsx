import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  NativeEventEmitter
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Icon, Button } from "react-native-elements";
import Toast from "react-native-tiny-toast";
import { withNavigation } from "@react-navigation/compat";

import firebase from "../../../../api/firebase";
import { validateEmail } from "../../../../utils/validators";
import useRegisterUser from "./Hooks/useRegisterUser";
import Loading from "../../../Loaders/Loading";
// TODO: this needs to be done with the app finished
const checkUserEmail = email => {
  return;
  // Send validation email to the user
  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    //   url: "https://www.example.com/finishSignUp?cartId=1234",
    url: "http://localhost",
    // This must be true.
    handleCodeInApp: true
    //   iOS: {
    //     bundleId: "es.carlosloureda.tripadvisor-ios"
    //   },
    //   android: {
    //     packageName: "es.carlosloureda.tripadvisor-android",
    //     installApp: true,
    //     minimumVersion: "12"
    //   }
    //   dynamicLinkDomain: "example.page.link"
  };
  firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function() {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      //TODO:
      // window.localStorage.setItem("emailForSignIn", email);
      console.log("email successfully sent");
    })
    .catch(function(error) {
      // Some error occurred, you can inspect the code: error.code
      console.log("ERRORACO: ", error);
    });
};

const Register = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);
  const [isVisibleLoading, setIsVisibleLoading] = React.useState(false);

  const onRegister = async () => {
    setIsVisibleLoading(true);
    const errors = [];
    // Declared on next function
    if (email && password && passwordRepeat) {
      if (!validateEmail(email)) {
        errors.push({
          field: "email",
          message: "Email is not a good email"
        });
      }
      if (password !== passwordRepeat) {
        errors.push({
          field: "password",
          message: "Passwords are different"
        });
      }
    } else {
      errors.push({
        field: "all",
        message: "All fields are required"
      });
    }
    if (errors && errors.length) {
      errors.forEach(error =>
        console.log(`-${error.field} -  ${error.message}`)
      );
      const errorMessage = errors.map(error => error.message).join("\n");

      Toast.show(errorMessage, {
        position: Toast.position.CENTER,
        textColor: "red"
      });
    } else {
      console.log("User registered");
      try {
        //   Register User
        const registerResponse = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        //steps after logging in
        console.log("User registered!: ", registerResponse);
        console.log(registerResponse.user.uid);
        // checkUserEmail(email); // Not implemented
        console.log("navigate to");
        navigation.navigate("Account");
        console.log("after navigate to");
      } catch (error) {
        // error.code == "auth/email-already-in-use"
        // console.error("An error occurred: ", error.message);
        Toast.show(error.message, {
          position: Toast.position.CENTER
        });
        //error handling
      }
    }
    setIsVisibleLoading(false);
  };
  const {
    inputs: { email, password, passwordRepeat },
    handleInputChange,
    handleSubmit
  } = useRegisterUser(onRegister);

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/5forks.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.form}>
        <Input
          placeholder="Email address"
          containerStyle={styles.input}
          onChange={e => handleInputChange(e, "email")}
          rightIcon={
            <Icon
              type="material-community"
              name="at"
              iconStyle={styles.inputIcon}
            />
          }
        />
        <Input
          placeholder="Password"
          containerStyle={styles.input}
          secureTextEntry={showPassword ? false : true}
          onChange={e => handleInputChange(e, "password")}
          rightIcon={
            <Icon
              type="material-community"
              name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={
                showPassword ? styles.inputIconSelected : styles.inputIcon
              }
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Input
          placeholder="Repeate password"
          containerStyle={styles.input}
          secureTextEntry={showRepeatPassword ? false : true}
          onChange={e => handleInputChange(e, "passwordRepeat")}
          rightIcon={
            <Icon
              type="material-community"
              name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={
                showRepeatPassword ? styles.inputIconSelected : styles.inputIcon
              }
              onPress={() => setShowRepeatPassword(!showRepeatPassword)}
            />
          }
        />
        <Button
          title="Join!"
          containerStyle={styles.submitBtnContainer}
          buttonStyle={styles.submitBtn}
          onPress={handleSubmit}
          disabled={email && password && passwordRepeat ? false : true}
        />
        <Loading isVisible={isVisibleLoading} text="Creating account ..." />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default withNavigation(Register);

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  form: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40
  },
  input: {
    width: "100%",
    marginTop: 20
  },
  inputIconSelected: {
    color: "#878787"
  },
  inputIcon: {
    color: "#c1c1c1"
  },
  submitBtnContainer: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center"
  },
  submitBtn: {
    backgroundColor: "#00a680"
  }
});
