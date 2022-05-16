import React from "react"
import {
    StyleSheet,
    View,
} from "react-native"

import Header from "../components/header";
import RegForm from "../components/Regform";

export default class RegisterFormView extends React.Component {


    render() {

        return (
            <View style={styles.container}>
                <RegForm />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#4682B4",
        paddingLeft: 60,
        paddingRight: 60,
    },


})