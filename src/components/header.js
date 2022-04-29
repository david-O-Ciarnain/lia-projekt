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
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


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

    justifyContent: "flex-start",
    flexDirection: "column",

    marginHorizontal: 8,

  },

  header: {
    marginTop: 30,
    width: "90%",
    height: 50,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start",
    
  },
  
  
});
