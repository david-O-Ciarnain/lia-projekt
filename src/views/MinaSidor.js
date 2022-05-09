import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from '../components/Login';
import navigation from 'react-navigation'



function MinaSidor(userIsLoggedIn, navigation) {
    userIsLoggedIn = false;

    // if (userIsLoggedIn === false) {
    //     return (
    //         navigation.navigate('Index')
    //     )
    // } else {}

    return (
        <View>
            <Text>
                <Text>Not logged in!!!!</Text>
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