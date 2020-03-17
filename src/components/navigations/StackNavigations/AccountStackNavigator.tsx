import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/MyAccount/Login";
import MyAccount from "../../screens/MyAccount";
import Register from "../../screens/MyAccount/Register";

const Stack = createStackNavigator();
const AccountStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={MyAccount} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
