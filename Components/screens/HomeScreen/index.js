import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeContainer from "./HomeContainer";
import CategoryContainer from "./CategoryContainer";

const Stack = createNativeStackNavigator();

export default () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeContainer" component={HomeContainer} options={{contentStyle:{backgroundColor:"black"}}} />
      <Stack.Screen name="CategoryContainer" component={CategoryContainer}options={{contentStyle:{backgroundColor:"black"}}}  />
    </Stack.Navigator>
  );
};
