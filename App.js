import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import TopBar from "./Components/bars/TopBar";
import BottomBar from "./Components/bars/BottomBar";
import {
  LoadingContext,
  RefreshingContext,
} from "./Components/helpers/Context";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <RefreshingContext.Provider value={{ refreshing, setRefreshing }}>
        <NativeBaseProvider>
          <TopBar />
          <NavigationContainer>
            <BottomBar />
          </NavigationContainer>
          <StatusBar style="dark" />
        </NativeBaseProvider>
      </RefreshingContext.Provider>
    </LoadingContext.Provider>
  );
}
