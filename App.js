import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  StyleSheet,
} from "react-native";

import ByggstadView from "./src/views/ByggstadView";
import HemstadView from "./src/views/HemstadView";
import StorstadView from "./src/views/StorstadView";
import Index from "./src/views/View";
import MinaSidor from "./src/views/MinaSidor";
import Header from "./src/components/header";
import LoginScreen from "./src/views/Login";
import Arbetsmiljohandbok from './src/views/Arbetsmiljohandbok';
import Nyhetsflode from './src/views/Nyhetsflode';
import Kalender from './src/views/Kalender';
import Sakerhetsdatablad from './src/views/Sakerhetsdatablad';
import Checklistor from './src/views/Checklistor';
import FlyttstadView from './src/views/FlyttstadView';
import TestChecView from './src/views/TestChecView'


//const [userLoggedin, setUserLoggedin] = React.useState('false')




const navigator = createStackNavigator({
  Index: Index,
  MinaSidor: MinaSidor,
  Login: LoginScreen,
  Arbetsmiljohandbok: Arbetsmiljohandbok,
  Nyhetsflode: Nyhetsflode,
  Kalender: Kalender,
  Sakerhetsdatablad: Sakerhetsdatablad,
  Checklistor: Checklistor,
  ByggstadView: ByggstadView,
  StorstadView: StorstadView,
  FlyttstadView: FlyttstadView,
  HemstadView: HemstadView,
  TestChecView: TestChecView



}, {
  initialRouteName: "Index",
  defaultNavigationOptions: {
    title: "",
    headerBackground: () => <Header />,
    headerBackTitleVisible: false,
    animationEnabled: false

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



