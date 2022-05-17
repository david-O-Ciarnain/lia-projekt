
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





function Header() {

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
    backgroundColor: "#fff",

    justifyContent: "flex-start",
    flexDirection: "column",

  },

  header: {
    marginTop: 30,
    width: "100%",
    height: 50,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start",

  },


});

export default Header;