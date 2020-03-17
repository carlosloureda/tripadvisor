import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { withNavigation } from "@react-navigation/compat";
import Toast from "react-native-tiny-toast";

import PasswordInput from "../../../../common/PasswordInput";
import { validateEmail } from "./../../../../../utils/validators";
import colors from "../../../../../styles/colors";
import Loading from "../../../../Loaders/Loading";
import firebase from "../../../../../api/firebase";

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isVisibleLoading, setIsVisibleLoading] = React.useState(false);

  const login = async () => {
    setIsVisibleLoading(true);
    if (validateEmail(email)) {
      try {
        const loginResponse = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (loginResponse) {
          console.log("-> loginResponse: ", loginResponse);
          navigation.navigate("Account");
        }
      } catch (error) {
        console.log("Error: ", error.message);
        Toast.show("Email or password incorrect", {
          position: Toast.position.CENTER
        });
      }
    } else {
      Toast.show("Not a valid email", {
        position: Toast.position.CENTER
      });
    }
    setIsVisibleLoading(false);
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email Address"
        containerStyle={styles.inputForm}
        onChange={e => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <PasswordInput
        placeholder={"Password"}
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <Button
        title="Login"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={login}
        disabled={email && password ? false : true}
      />
      <Loading isVisible={isVisibleLoading} text="Loging in ..." />
    </View>
  );
};

export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    marginTop: 20
  },
  iconRight: {
    color: "#c1c1c1"
  },
  inputIconSelected: {
    color: "#878787"
  },
  inputIcon: {
    color: "#c1c1c1"
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%"
  },
  btnLogin: {
    backgroundColor: colors.green
  }
});
