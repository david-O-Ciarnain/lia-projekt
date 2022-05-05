import Header from "../components/header";
import Checkbox from "../components/Checkbox";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import HemstadAllaRumArray from "../Lists/HemstadAllaRumArray"
import HemstadKokArray from "../Lists/HemstadKokArray"
import HemstadBadrumArray from "../Lists/HemstadBadrumArray"
import HemstadSovrumArray from "../Lists/HemstadSovrumArray";
import HemstadAllVardagsrumArray from "../Lists/HemstadAllVardagsrumArray";
import HemstadHallArray from "../Lists/HemstadHallArray";
import { FlatList } from "react-native";


export default function HemstadView() {

    return (

        <SafeAreaView>
            <Header />
            <Text>Försök se vad kunden ser. T.ex. En dammig lampa, tvålkopp, dörrmatta, fingeravtryck i barnhöjd!</Text>
            <Text>Alla rum</Text>

        <FlatList data={HemstadAllaRumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Kök</Text>

        <FlatList data={HemstadKokArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Badrum/WC</Text>

        <FlatList data={HemstadBadrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Sovrum</Text>

        <FlatList data={HemstadSovrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Allrum/Vardagsrum</Text>

        <FlatList data={HemstadAllVardagsrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Hall</Text>

        <FlatList data={HemstadHallArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        </SafeAreaView>

    )

}