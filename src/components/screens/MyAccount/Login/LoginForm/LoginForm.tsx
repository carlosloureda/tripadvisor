import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const login = () => {
    console.log("User logged");
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email Address"
        containerStyle={styles.inputForm}
        onChange={() => console.log("holas")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Password"
        containerStyle={styles.inputForm}
        secureTextEntry={showPassword ? false : true}
        onChange={() => console.log("pass updated")}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={
              showPassword ? styles.inputIconSelected : styles.inputIcon
            }
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Login"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={login}
      />
    </View>
  );
};

export default LoginForm;

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
    backgroundColor: "#00a680"
  }
});
