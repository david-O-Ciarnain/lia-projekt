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
import Index from "./src/views/View";
import Header from "./src/components/Header"

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "space-around",

    marginHorizontal: 8,

  },

  header: {
    marginTop: 20,
    width: "90%",
    height: 50,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center"
  },

  buttonView: {
    backgroundColor: "#4682B4",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  image: {

    width: 80,
    height: 70,
    resizeMode: "contain"
  },

  title: {
    textAlign: "center",
  },

  button: {

  },
});
