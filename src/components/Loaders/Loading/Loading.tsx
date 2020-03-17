import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
import colors from "../../../styles/colors";

const Loading = ({ isVisible: boolean, text = "Loading ..." }) => {
  return (
    <Overlay
      isVisible={boolean}
      windowBackgroundColor="rgba(0, 0, 0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color={colors.green} />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
};

export default Loading;

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: colors.green,
    borderWidth: 2,
    borderRadius: 10
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.green,
    textTransform: "uppercase",
    marginTop: 10
  }
});
