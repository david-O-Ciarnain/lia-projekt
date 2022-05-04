import { Linking } from "react-native";


//kolla att öpnna i module

export default function Tengella({ navigation }) {
    Linking.openURL('https://portal.tengella.se/Home/Login').catch((err => console.log("An error occured " + err)));
    return (
        navigation.navigate('Index')
    )
}



