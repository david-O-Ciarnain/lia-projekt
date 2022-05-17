import { View, Image, Text, Button } from 'react-native'

export default function Arbetsmiljohandbok() {

    const getPolicy = async () => {
        fetch("http://localhost:8080/files/f33850f7-a23d-4326-a8e1-e34aefca4a80")
    }

    return (
        <View>
            <Image source={require("../../assets/arbetsmiljöhandbok.png")} />
            <Text>Arbetsmiljöhandbok</Text>
            <Button
                title='test policy'
                onPress={getPolicy}
            />
        </View>
    )
}