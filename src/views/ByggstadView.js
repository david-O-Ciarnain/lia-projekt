import { SafeAreaView, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import Checkbox from "../components/Checkbox";
import { FlatList } from "react-native";
import ByggstadFonsterArray from "../Lists/ByggstadFonsterArray";
import ByggstadRumArray from "../Lists/ByggstadRumArray";
import ByggstadKokArray from "../Lists/ByggstadKokArray";
import ByggstadVatrumArray from "../Lists/ByggstadVatrumArray";
import ByggstadUtermBalkongArray from "../Lists/ByggstadUtermBalkongArray";
import ByggstadTrapphallArray from "../Lists/ByggstadTrapphallArray";
import ByggstadHissArray from "../Lists/ByggstadHissArray";
import ByggstadTillaggArray from "../Lists/ByggstadTillaggArray";


export default function ByggstadView() {

    return (

        <SafeAreaView>
            <Text>BYGGSTÄDNING</Text>

            <Text> Generellt gäller att förekommande skyddstäckning på golv och i trappor ska tas bort,
                leverantörens städningsanvisningar för exempelvis trägolv, plastmatta, linoleum, textilmatta,
                köksinredning, vitvaror, undertak, kakel och klinker mm. ska följas!
            </Text>


            <Text>Fönsterputsning</Text>

            <FlatList data={ByggstadFonsterArray} renderItem={({ item }) => {
                return <Checkbox
                    text={item.text}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text>Rum</Text>
            <Text>Avtorkning och rengöring av följande: </Text>

            <FlatList data={ByggstadRumArray} renderItem={({ item }) => {
                return <Checkbox
                    text={item.text}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text>Kök</Text>
            <Text>Avtorkning och rengöring av följande: </Text>

            <FlatList data={ByggstadKokArray} renderItem={({ item }) => {
                return <Checkbox
                    text={item.text}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text>Våtrum</Text>
            <Text>Avtorkning och rengöring av följande: </Text>

            <FlatList data={ByggstadVatrumArray} renderItem={({ item }) => {
                return <Checkbox
                    text={item.text}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text>Inglasat uterum/balkong</Text>

            <FlatList data={ByggstadUtermBalkongArray} renderItem={({ item }) => {
                return <Checkbox
                    text={item.text}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text>Trapphall</Text>
            <Text>Avtorkning och rengöring av följande: </Text>

            <FlatList data={ByggstadTrapphallArray} renderItem={({ item }) => {
                return <Checkbox
                    text={item.text}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text>Hiss</Text>
            <Text>Avtorkning och rengöring av följande: </Text>

            <FlatList data={ByggstadHissArray} renderItem={({ item }) => {
                return <Checkbox
                    text={item.text}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text>Tillägskrav vid städning av teknikutrymmen samt förråd</Text>

            <FlatList data={ByggstadTillaggArray} renderItem={({ item }) => {
                return <Checkbox
                    text={item.text}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />


        </SafeAreaView>

    )


}