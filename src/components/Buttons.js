import React from 'react'
import {
    StyleSheet,
    Text,
    Button,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableHighlight
} from 'react-native'
import Test from "./TESTarrayImg"


export default function Buttons({ image, title }) {


    return (
        <View style={styles.buttonView}>
            <Image style={styles.image} source={image} />

            <Button

                style={styles.button}

                title={title}

                color="#4682B4"
                onPress={() => Alert.alert("Simple Button pressed")}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    image: {

        width: 80,
        height: 70,
        resizeMode: "contain"
    },
    button: {
        width: "100%",
        height: 50
    },
    buttonView: {
        backgroundColor: "#4682B4",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 10
    }
})