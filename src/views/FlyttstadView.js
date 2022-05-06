import { SafeAreaView, StyleSheet, Text } from "react-native";
import Checkbox from "../components/Checkbox";
import Header from "../components/header";
import { FlatList } from "react-native";
import FlyttstadKokArray from "../Lists/FlyttstadKokArray";
import FlyttstadRumArray from "../Lists/FlyttstadRumArray";
import FlyttstadBadrumArray from "../Lists/FlyttstadBadrumArray";



export default function ChecklistView() {

    return(
        <SafeAreaView>
            <Header />
            <Text>FLYTTSTÄDNING</Text>

            <Text>Observera att även om du följer denna checklista, har du ansvar att städa detaljer som eventuellt inte finns med på listan</Text>
            
            <Text>Kök</Text>

        <FlatList data={FlyttstadKokArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Rum</Text>

        <FlatList data={FlyttstadRumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Badrum/Wc</Text>

        <FlatList data={FlyttstadBadrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Fönsterputs</Text>
        <Text>Samtliga fönster tvättas på alla sidor, färg och tejprester avlägsnas om möjlighet finns. 
            Inget rakblad eller liknande används om det inte finns en överenskommelse. Fönsterbågar och 
            snickerier avtorkas, avtorkning av alla berörda ytor, både vågräta och lodräta. </Text>
        
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    kategoriStyle: {
        marginLeft: 10,
    }
})