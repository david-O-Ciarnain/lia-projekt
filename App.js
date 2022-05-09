import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  StyleSheet,
} from "react-native";
import Index from "./src/views/View";
import MinaSidor from "./src/views/MinaSidor";
import Header from "./src/components/header";
import LoginScreen from "./src/views/Login";


//const [userLoggedin, setUserLoggedin] = React.useState('false')




const navigator = createStackNavigator({
  Index: Index,
  MinaSidor: MinaSidor,
  Login: LoginScreen


}, {
  initialRouteName: "Index",
  defaultNavigationOptions: {
    title: "",
    headerBackground: () => <Header />,
    headerBackTitleVisible: true,

  }
})

const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: "normal",
    color: "#fff"
  }
})

export default createAppContainer(navigator)



