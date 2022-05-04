import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";
import {
  StyleSheet,
  Text,
} from "react-native";
import Index from "./src/views/View";
import MinaSidor from "./src/views/MinaSidor";
import Header from "./src/components/header";
import { Link } from "@react-navigation/native";
import { Linking } from "react-native";
import Tengella from "./src/views/Tengella";



const navigator = createStackNavigator({
  Index: Index,
  MinaSidor: MinaSidor,
  Tengella: Tengella


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



