import { View, Image, Text, FlatList } from 'react-native'
import Buttons from '../components/Buttons'



export default function Checklistor() {

    // ByggstadView, FlyttstadView, HemstadView, StorstadView,

    const checkListArray = [
        {
            img: require("../../assets/mina_sidor.png"),
            title: "Byggstäd",
            screen: "ByggstadView"
        },
        {
            img: require("../../assets/mina_sidor.png"),
            title: "Stor Städ",
            screen: "StorstadView"
        },
        {
            img: require("../../assets/mina_sidor.png"),
            title: "Flytt Städ",
            screen: "FlyttstadView"
        },
        {
            img: require("../../assets/mina_sidor.png"),
            title: "Hem Städ",
            screen: "HemstadView"
        },
        {
            img: require("../../assets/mina_sidor.png"),
            title: "Hem Städ",
            screen: "TestChecView"
        }

    ]

    return (
        <View>
            <FlatList data={checkListArray} renderItem={({ item }) => {
                return <Buttons
                    title={item.title}
                    image={item.img}
                    screen={item.screen}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />



        </View>
    )
}