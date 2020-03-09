import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Icon, Button } from "react-native-elements";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);

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
          onChange={() => console.log("Email updated")}
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
          onChange={() => console.log("password updated")}
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
          onChange={() => console.log("repeat password updated")}
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
