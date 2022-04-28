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


export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.header}
        source={require("../../assets/CS_logo_vert.png")}
      />
    </SafeAreaView>);

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
});
