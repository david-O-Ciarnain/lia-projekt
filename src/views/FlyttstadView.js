import { SafeAreaView, StyleSheet, Text } from "react-native";
import Checkbox from "../components/Checkbox";
import Header from "../components/header";
import { FlatList } from "react-native";
import FlyttstadKokArray from "../components/FlyttstadKokArray";
import FlyttstadRumArray from "../components/FlyttstadRumArray";



export default function ChecklistView() {

    return(
        <SafeAreaView>
            <Header />
            <Text>Kök</Text>

        <FlatList data={FlyttstadKokArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        //keyExtractor={(item, index) => index.toString()}
        />

        <Text>Rum</Text>

        <FlatList data={FlyttstadRumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        //keyExtractor={(item, index) => index.toString()}
        />
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    kategoriStyle: {
        marginLeft: 10,
    }
})