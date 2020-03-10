import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import firebase from "../../../../api/firebase";

const LoggedUser = () => {
  return (
    <View>
      <Text>LoggedUser</Text>
      <Button
        title="Log out"
        onPress={() => firebase.auth().signOut()}
      ></Button>
    </View>
  );
};

export default LoggedUser;
