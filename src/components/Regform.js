import React from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native"

export default class RegForm extends React.Component {


    render() {  

        return(
            <View style={styles.regform}>


                <Text style={styles.header}>Registrering</Text>

                <TextInput 
                style={styles.textinput} 
                placeholder="Namn" 
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
                />

                <TextInput 
                style={styles.textinput} 
                placeholder="Efternamn" 
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/ 
                />

                <TextInput 
                style={styles.textinput} 
                placeholder="Födelsedatum" 
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/ 
                />

                <TextInput 
                style={styles.textinput} 
                placeholder="E-mail" 
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/ 
                />

                <TextInput 
                style={styles.textinput} 
                placeholder="Användarnamn" 
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/ 
                />

                <TextInput 
                style={styles.textinput} 
                placeholder="Lösenord" 
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
                secureTextEntry={true} 
                />

                <TouchableOpacity style={styles.regBtn}>
                    <Text style={styles.btnText}>Skapa Användare</Text>
                </TouchableOpacity>
            </View>
         )
    }
}

const styles = StyleSheet.create({

    regform: {
        alignSelf: "stretch",
    },

    header: {
        fontSize: 34,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#3492eb",
        borderBottomWidth: 8,
        // shadowColor: "#000",
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
    
        
    },

    textinput: {
        alignSelf: "stretch",
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1,
        textAlignVertical: "top"
    },

    regBtn: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#3492eb",
        marginTop: 30,
        borderRadius: 5,
        // borderWidth: 1,
        // borderColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },

    btnText: {
        color: "#fff",
        fontWeight: "bold",
    }
})