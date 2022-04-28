import React from 'react'
import { StyleSheet,
    Text,
    Button,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableHighlight} from 'react-native'
    import Test from "./TESTarrayImg"
    

export default function Buttons(props){

   
            return ( 
                <View>
        <Image style={styles.image} source={require(`./assets/${props.img}`)} />

        <Button
        
        style={styles.button}
          
          title={props.title}
          
          color="#4682B4"
          onPress={() => Alert.alert("Simple Button pressed")}
          />
       </View>
      
    )
}