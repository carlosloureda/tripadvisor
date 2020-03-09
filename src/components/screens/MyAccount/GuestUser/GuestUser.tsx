import React from "react";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import { Button } from "react-native-elements";

const GuestUser = () => {
  return (
    <ScrollView style={styles.view}>
      <Image
        source={require("../../../../assets/img/guest-login.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Check your profile on TripAdvisor</Text>
      <Text style={styles.description}>
        How would you describe your best restaurant? Search and visualize the
        best restaurants in a simple way, vote for the one you liked best and
        comment on your experience.
      </Text>
      <View style={styles.btnView}>
        <Button
          buttonStyle={styles.btn}
          containerStyle={styles.btnContainer}
          title="Create your profile"
          onPress={() => console.log("Button pressed")}
        ></Button>
      </View>
    </ScrollView>
  );
};

export default GuestUser;

const styles = StyleSheet.create({
  view: {
    marginLeft: 30,
    marginRight: 30
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  btnView: {
    flex: 1,
    alignItems: "center"
  },
  btn: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%"
  }
});
