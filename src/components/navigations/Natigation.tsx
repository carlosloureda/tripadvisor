import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Restaurants from "../screens/Restaurants";
import MyAccount from "../screens/MyAccount";
import Search from "../screens/Search";
import TopRestaurants from "../screens/TopRestaurants";
const Tab = createBottomTabNavigator();

// <Stack.Navigator>
//     <Stack.Screen name="Top 5" component={}/>
// </Stack.Navigator>

function MainNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          tabBarLabel: "Restaurants",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="TopRestaurants"
        component={TopRestaurants}
        options={{
          tabBarLabel: "Top",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="rocket" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;
