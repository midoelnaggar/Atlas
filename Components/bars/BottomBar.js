import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen/index.js";
import NewsScreen from "../screens/NewsScreen";
import OffersScreen from "../screens/OffersScreen";
import SearchScreen from "../screens/SearchScreen";
import InfoScreen from "../screens/InfoScreen";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{backgroundColor:"black"}}
    initialRouteName="Home"
      labeled={false}
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor: "white",
        }
      }}
      backBehavior={()=>{return}}
    >
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="information-circle" size={40} color="black" />
            ) : (
              <Ionicons
                name="information-circle-outline"
                size={32}
                color="black"
              />
            ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="newspaper" size={40} color="black" />
            ) : (
              <Ionicons name="newspaper-outline" size={32} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={40} color="black" />
            ) : (
              <Ionicons name="home-outline" size={32} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="ticket-percent"
                size={40}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                name="ticket-percent-outline"
                size={32}
                color="black"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search" size={40} color="black" />
            ) : (
              <Ionicons name="search-outline" size={32} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
