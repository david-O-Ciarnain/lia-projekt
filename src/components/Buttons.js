import React from 'react'
import {
    StyleSheet,
    Text,
    Button,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Linking,

} from 'react-native'
import { withNavigation } from 'react-navigation';




function Buttons({ image, title, screen, navigation }) {


    return (

        <TouchableOpacity
            onPress={() => {
                //fler external länkar sätt screen till external och lägg till key-value i testarray för länken.
                if (screen == "Tengella") {
                    Linking.openURL('https://portal.tengella.se/Home/Login').catch((err => console.log("An error occured " + err)))
                } else {
                    navigation.navigate(screen)
                }
            }}
        >
            <View style={styles.buttonView}>

                <Image style={styles.image} source={image} />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>
                        {title}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    image: {
        margin: 10,
        width: 80,
        height: 60,
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
        marginTop: 10,

    },
    textStyle: {
        margin: 20,
        fontSize: 20,
        fontWeight: "normal",
        color: "#fff"

    },
    textContainer: {

    }
})

export default withNavigation(Buttons);