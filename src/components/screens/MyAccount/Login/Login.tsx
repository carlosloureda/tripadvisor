import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { withNavigation } from "@react-navigation/compat";

const Login = () => {
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5forks.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.view}>
        <Text>Form login ... </Text>
        <Text>Create account ... </Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.view}>
        <Text>Login Facebook ... </Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  view: {
    marginRight: 40,
    marginLeft: 40
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40
  }
});
