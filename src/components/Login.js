import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

const users = [
    {
        username: "test1",
        password: "abc"
    },
    {
        username: "test2",
        password: "123"
    }
]

const handleLogin = (username, password) => {
    console.log("Test")
    console.log(username)
    console.log(password)
}

export default function LoginScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={style.loginContainer}>
            <Modal style={style.loginContainer}
                coverScreen={true}>
                <TextInput
                    style={style.textFieldStyle}
                    placeholder="Användarnamn"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={style.textFieldStyle}
                    placeholder="Lösenord"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)} />

                <Button
                    style={style.loginButton}
                    title="Logga in"
                    onPress={() => handleLogin(username, password)}
                ></Button>

            </Modal>
        </View>
    );
}

const style = StyleSheet.create({
    textFieldStyle: {
        flexDirection: "row",
        backgroundColor: "#afafaf",
        marginTop: 5,
        width: "50%",
        alignSelf: "center",
        padding: 15,
    },
    loginButton: {
        maxWidth: "20%",
        backgroundColor: "yellow",
        color: "black"
    },
    loginContainer: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        width: 250,
        backgroundColor: "yellow"
    }
})