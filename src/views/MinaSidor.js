import { Text, View, StyleSheet, Button } from 'react-native';
import LoginScreen from '../components/Login';
import navigation from 'react-navigation'




function MinaSidor() {


    const loginUser = async () => {
        try {
            fetch('http://localhost:8080/test/registration/appusers')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                });
        }
        catch (e) {
            console.log(e)
        }
    }

    const test = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: "Kalle",

            lastName: "Karlsson",

            username: "abc1asdasdasd231",

            password: "abcasasdd1asd231",

            email: "12asd3dasd12asd3avid9@live.se"

        })
    }

    const addUser = async () => {
        const response = await fetch('http://localhost:8080/test/registration', test);
        const data = JSON.stringify(response);
        console.log(data)

    };




    return (
        <View>
            <Text>
                <Text>Not logged in!!!!</Text>
                <Button
                    title='Klicacsaca'
                    onPress={loginUser}
                />
                <Button
                    title='lägga till'
                    onPress={addUser}
                />
            </Text>
        </View>
    )
}


export default MinaSidor;

const styles = StyleSheet.create(
    {
        textFieldStyle: {
            flexDirection: "row",
            backgroundColor: "#afafaf",
            marginTop: 5,
            width: "80%",
            alignSelf: "center",
            padding: 15,
        },
        loginButton: {
            flex: 1,
            maxWidth: 40,
            backgroundColor: "yellow",
            color: "black"
        },
        loginContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ecf0f1',
        }
    }
)