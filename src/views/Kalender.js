import { View, Image, Text } from 'react-native'

export default function Kalender() {
    return (
        <View>
            <Image source={require("../../assets/arbetsmiljöhandbok.png")} />
            <Text>Kalender</Text>
        </View>
    )
}