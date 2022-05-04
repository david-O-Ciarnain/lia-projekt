import { SafeAreaView, StyleSheet } from "react-native";
import Checkbox from "../components/Checkbox";
import Header from "../components/header";
import { FlatList } from "react-native";
import FlyttstadKokArray from "../components/FlyttstadKokArray";



export default function ChecklistView() {

    return(
        <SafeAreaView>
            <Header />
            <h1>Kök</h1>

        <FlatList data={FlyttstadKokArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        />
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    kategoriStyle: {
        marginLeft: 10,
    }
})