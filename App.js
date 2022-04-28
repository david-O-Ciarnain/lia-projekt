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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={styles.header}
        source={require("./assets/CS_logo_vert.png")}
      />



      <View style={styles.buttonView}>
        <Image style={styles.image} source={require("./assets/Tengella.png")} />

        <Button
        
          style={styles.button}
          
          title="Tengella"
          
          color="#4682B4"
          onPress={() => Alert.alert("Simple Button pressed")}
          
        />
      </View>

      <View style={styles.buttonView}>
        <Image style={styles.image} source={require("./assets/nyhet.png")} />
        <Button
          style={styles.button}
          title="Nyhetsflöde"
          color="#4682B4"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>

      <View style={styles.buttonView}>
        <Image
          style={styles.image}
          source={require("./assets/mina_sidor.png")}
        />
        <Button
          style={styles.button}
          title="Mina sidor"
          color="#4682B4"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>

      <View style={styles.buttonView}>
        <Image
          style={styles.image}
          source={require("./assets/spray_bottle.webp")}
        />
        <Button
          style={styles.button}
          title="Förbrukningsmaterial"
          color="#4682B4"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>

      <View style={styles.buttonView}>
        <Image style={styles.image} source={require("./assets/calender.png")} />
        <Button
          style={styles.button}
          title="Kalender"
          color="#4682B4"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>

      <View style={styles.buttonView}>
        <Image
          style={styles.image}
          source={require("./assets/personalhandbok.webp")}
        />
        <Button
          style={styles.button}
          title="Personalhandbok"
          color="#4682B4"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>

      <View style={styles.buttonView}>
        <Image
          style={styles.image}
          source={require("./assets/1510827013283693933093_negate.png")}
        />
        <Button
          style={styles.button}
          title="Blanketter vid olycka"
          color="#4682B4"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>

      <View style={styles.buttonView}>
        <Image
          style={styles.image}
          source={require("./assets/arbetsmiljöhandbok.png")}
        />
        <Button
          style={styles.button}
          title="Arbetsmiljöhandbok"
          color="#4682B4"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
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
    resizeMode:"contain"
  },

  title: {
    textAlign: "center",
  },

  button:{
    
  },
});
