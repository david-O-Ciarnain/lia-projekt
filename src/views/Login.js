import { TouchableWithoutFeedback, TouchableOpacity, View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'




export default function LoginScreen({ navigation }) {

    const [username, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")

    const users = {
        username: "a",
        password: "b"
    }


    return (
        <TouchableOpacity style={styles.viewContainer}
            onPress={() => navigation.goBack()}
        >
            <Text>Login</Text>
            <TouchableWithoutFeedback style={styles.center}>
                <View style={styles.loginContainer}>
                    <TextInput placeholder='Username'
                        onChangeText={(text) => setUserName(text)}
                        style={styles.textInputFields} />

                    <TextInput placeholder='Password'
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        style={styles.textInputFields} />
                    <Button title="Login"
                        onPress={handleLogin(users, username, password)} />
                    <Button title="Forgot Password" />
                </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity >
    )
}

const handleLogin = async (users, username, password) => {

    //call till backend
    //om succes return ny main view?
    //annars stanna på login och visa error

    console.log(username + " ---- " + password)
}

const styles = StyleSheet.create({
    viewContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgrey",

    },
    loginContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
        height: "50%",
        backgroundColor: "yellow"
    },
    center: {
        alignContent: "center",
        justifyContent: "center"
    },
    textInputFields: {
        width: "70%",
        alignSelf: "center",
        borderWidth: 0.5,
        borderColor: "lightblue",
        height: "7%",
        margin: 0,
        padding: 1,
        marginBottom: 7,

    }
})