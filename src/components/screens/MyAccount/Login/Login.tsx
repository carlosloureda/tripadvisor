import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import LoginForm from "./LoginForm/LoginForm";
import { withNavigation } from "@react-navigation/compat";
import LoginFacebook from "./SocialLogin/LoginFacebook";
import colors from "../../../../styles/colors";

const CreateAccount = ({ onPressHandler }) => {
  return (
    <Text style={styles.textRegister}>
      Don't have an account yet?
      <Text style={styles.btnRegister} onPress={onPressHandler}>
        Register
      </Text>
    </Text>
  );
};

const Login = ({ navigation }) => {
  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5forks.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.view}>
        <LoginForm />
        <CreateAccount onPressHandler={goToRegister} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.view}>
        <LoginFacebook />
      </View>
    </ScrollView>
  );
};

export default withNavigation(Login);

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 130,
    marginTop: 10
  },
  view: {
    marginRight: 40,
    marginLeft: 40
  },
  divider: {
    backgroundColor: colors.green,
    margin: 20
  },
  textRegister: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: colors.green,
    margin: 40,
    fontWeight: "bold"
  }
});
