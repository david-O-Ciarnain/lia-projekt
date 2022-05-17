import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from "react-native"
import DropDownPicker from "react-native-dropdown-picker";


export default function RegForm() {

    const [password, setPassword] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Anställd', value: 'ROLE_USER' },
        { label: 'Chef', value: 'ROLE_ADMIN' },
        { label: 'Chefens Chef', value: 'ROLE_SUPER_ADMIN' }
    ]);
    const [userRole, setUserRole] = React.useState('');

    const handleCreateUser = async () => {
        if (firstname.length < 2) {
            alert("Vänligen ange ett förnamn")
        } else if (lastname.length < 2) {
            alert("Vänligen ange ett efternamn")
        } else if (email.length < 4) {
            alert("Vänligen ange en email")
        }
        else if (password.length < 4) {
            console.log("test")
            alert("Lösenordet måste vara minst 4 tecken!")
        } else {
            console.log("hej")
            const test = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: firstname,

                    lastName: lastname,

                    username: email,

                    password: password,

                    email: email,

                    roles: value


                })
            }
            const response = await fetch('http://localhost:8080/test/registration', test);
            console.log(response)
            clearTextFields();

        }

    }

    function clearTextFields() {
        setValue(null)
        let textFields = document.querySelectorAll("input");
        textFields.forEach(input => {
            input.value = "";
        })
    }






    return (
        <View style={styles.regform}>


            <Text style={styles.header}>Registrering</Text>
            <View>
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
                    placeholder="E-mail"
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
                />


                <TextInput
                    style={styles.textinput}
                    placeholder="Lösenord"
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor={"#fff"} /*underlineColorAndroid={"transparent"}*/
                    secureTextEntry={true}
                />
                <DropDownPicker
                    dropDownContainerStyle={{
                        backgroundColor: "#3492eb"
                    }}
                    listItemLabelStyle={styles.btnText}
                    placeholder="Välj roll"
                    placeholderStyle={styles.btnText}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={() => {
                        console.log(value)
                    }}
                />

            </View>

            <Button
                title="Test klick"
                onPress={handleCreateUser}
            />
            {/* <Text style={styles.btnText} onPressOut={console.log("klicked")}>Skapa Användare</Text> */}
            {/* <TouchableOpacity style={styles.regBtn}>
            </TouchableOpacity> */}
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
    },
    dropStyle: {
        color: "white",

    }
})