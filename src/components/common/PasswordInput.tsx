import React from "react";
import { StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";

const PasswordInput = ({
  onChange,
  placeholder,
  containerStyle = styles.inputForm
}: {
  onChange: any;
  placeholder: string;
  containerStyle?: any;
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Input
      placeholder={placeholder}
      containerStyle={containerStyle ? containerStyle : styles.inputForm}
      secureTextEntry={showPassword ? false : true}
      onChange={onChange}
      rightIcon={
        <Icon
          type="material-community"
          name="eye-outline"
          iconStyle={showPassword ? styles.inputIconSelected : styles.inputIcon}
          onPress={() => setShowPassword(!showPassword)}
        />
      }
    />
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  inputIconSelected: {
    color: "#878787"
  },
  inputIcon: {
    color: "#c1c1c1"
  },
  inputForm: {
    width: "100%",
    marginTop: 20
  }
});
