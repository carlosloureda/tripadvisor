import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import RestaurantsStackNavigator from "./StackNavigations/RestaurantsStackNavigator";
import TopRestaurantsStackNavigator from "./StackNavigations/TopRestaurantsStackNavigator";
import SearchStackNavigator from "./StackNavigations/SearchStackNavigator";
import AccountStackNavigator from "./StackNavigations/AccountStackNavigator";

const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsStackNavigator}
        options={{
          tabBarLabel: "Restaurants",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="TopRestaurants"
        component={TopRestaurantsStackNavigator}
        options={{
          tabBarLabel: "Top",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="rocket" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={AccountStackNavigator}
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
