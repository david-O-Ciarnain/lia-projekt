import { SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import Checkbox from "../components/Checkbox";
import Header from "../components/header";
import { FlatList } from "react-native";
import FlyttstadKokArray from "../components/FlyttstadKokArray";
import FlyttstadRumArray from "../components/FlyttstadRumArray";
import { View } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";



export default function ChecklistView() {

    
    return(
        
        <SafeAreaView style={styles.background}  >
            <Header />
            <ScrollView>
        
            <Text style={styles.arrayHeader}>KÖK</Text>

            <FlatList  data={FlyttstadKokArray} renderItem={({ item }) => {
            return <Checkbox 
                    text={item.text}  
            /> 
            
        }}
       
        //keyExtractor={(item, index) => index.toString()}
        />
        
        <Text style={styles.arrayHeader}>RUM</Text>

        <FlatList  data={FlyttstadRumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        
        //keyExtractor={(item, index) => index.toString()}
        />
        
        </ScrollView>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    kategoriStyle: {
        marginLeft: 10,
    },
    arrayHeader:{
        height: 55,
        //borderRadius: 15,
        textAlign:"center",
        textAlignVertical: "center",
        margin:3,
        fontSize: 20,
        fontWeight: "normal",
        backgroundColor: "#4682B4",
        color: "#fff",
    },

    background:{
      //overflow:"scroll",
      
    },

    checklist:{
     
    }
  
})