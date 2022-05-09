import { SafeAreaView, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import Checkbox from "../components/Checkbox";
import { FlatList } from "react-native";
import StorstadKokArray from "../Lists/StorstadKokArray"
import StorstadBadrumArray from "../Lists/StorstadBadrumArray";
import StorstadAllaRumArray from "../Lists/StorstadAllaRumArray";
import StorstadTillaggArray from "../Lists/StorstadTillaggArray";
import { View } from "react-native";

export default function StorstadView() {

    return (

        <SafeAreaView>
            <Header />
            <Text>STORSTÄDNING</Text>
            
            <Text>Kök</Text>

            <FlatList data={StorstadKokArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />  

        <Text>Badrum</Text> 

         <FlatList data={StorstadBadrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Alla rum</Text>

        <FlatList data={StorstadAllaRumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text>Extra tillägg</Text>

        <FlatList data={StorstadTillaggArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />



        </SafeAreaView>
        
    )
}

