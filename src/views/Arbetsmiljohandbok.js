import { View, Image, Text } from 'react-native'

export default function Arbetsmiljohandbok() {
    return (
        <View>
            <Image source={require("../../assets/arbetsmiljöhandbok.png")} />
            <Text>Arbetsmiljöhandbok</Text>
        </View>
    )
}