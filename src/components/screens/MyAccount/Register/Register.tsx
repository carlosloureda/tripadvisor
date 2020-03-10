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
import { validateEmail } from "../../../../utils/validators";
import useRegisterUser from "./Hooks/useRegisterUser";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);

  const onRegister = (): void => {
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
        console.log(`${error.field} -  ${error.message}`)
      );
    } else {
      console.log("User registered");
    }
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
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
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
