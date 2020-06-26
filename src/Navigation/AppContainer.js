import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpSignIn from "../Screens/SignUpSignIn";
import Home from "../Screens/Home";
import Category from "../Screens/Category";
import Electroics from "../Screens/Electroics";
import Kids from "../Screens/Kids";
import Auto from "../Screens/Auto";
import Services from "../Screens/Services";
import Housing from "../Screens/Housing";
import BottomTabNAvigator from "./BottomTabNavigator";
import MainScreenNavigator from "./MainScreensNavigator";
import UserNavigator from "./UserNavigator";

const AppContainer = () => {
  return (
    <NavigationContainer>
      <UserNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
