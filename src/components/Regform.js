import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native"



export default function RegForm() {



    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    // const [birthday, setBirthday] = React.useState('');


    const handleCreateUser = async () => {
        const test = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: firstname,

                lastName: lastname,

                username: email,

                password: password,

                email: email,


            })
        }

        const response = await fetch('http://localhost:8080/test/registration', test);


    }






    return (
        <View style={styles.regform}>


            <Text style={styles.header}>Registrering</Text>

            <TextInput

                style={styles.textinput}
                placeholder="Namn"
                onChangeText={(text) => setFirstname(text)}
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
            />

            <TextInput

                style={styles.textinput}
                placeholder="Efternamn"
                onChangeText={(text) => setLastname(text)}
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
            />

            <TextInput

                style={styles.textinput}
                placeholder="Födelsedatum"
                //onChangeText={(text) => setBirthday(text)}
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
            />

            <TextInput
                style={styles.textinput}
                placeholder="E-mail"
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
            />

            <TextInput
                style={styles.textinput}
                placeholder="Användarnamn"
                onChangeText={(text) => setUsername(text)}
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
            />

            <TextInput
                style={styles.textinput}
                placeholder="Lösenord"
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.regBtn}>
                <Text style={styles.btnText} onPress={handleCreateUser}>Skapa Användare</Text>
            </TouchableOpacity>
        </View>
    )

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