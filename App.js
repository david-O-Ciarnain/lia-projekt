import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  Alert,
  Image,
  TouchableHighlight,
} from "react-native";

import Header from "./src/components/header"
import Index from "./src/views/View";

export default function App() {
  return (
    <Index />
    // <SafeAreaView style={styles.container}>
    //   <Image
    //     style={styles.header}
    //     source={require("./assets/CS_logo_vert.png")}
    //   />
    // </SafeAreaView>
  );
}



