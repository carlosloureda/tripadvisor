import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyAccount from "../../screens/MyAccount";

const Stack = createStackNavigator();
const AccountStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={MyAccount} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
