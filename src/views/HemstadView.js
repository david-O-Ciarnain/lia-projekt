import Header from "../components/header";
import Checkbox from "../components/Checkbox";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import HemstadAllaRumArray from "../components/HemstadAllaRumArray"
import HemstadKokArray from "../components/HemstadKokArray"
import HemstadBadrumArray from "../components/HemstadBadrumArray"
import HemstadSovrumArray from "../components/HemstadSovrumArray";
import HemstadAllVardagsrumArray from "../components/HemstadAllVardagsrumArray";
import HemstadHallArray from "../components/HemstadHallArray";
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