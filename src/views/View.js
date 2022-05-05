import React from 'react'
import {
    SafeAreaView,
    FlatList,
    StyleSheet
} from 'react-native'
import TESTarrayImg from '../components/TESTarrayImg'
import Buttons from '../components/Buttons'

function Index() {
    return (
        <SafeAreaView style={styles.rStyle}>
            <FlatList data={TESTarrayImg} renderItem={({ item }) => {
                return <Buttons
                    title={item.title}
                    image={item.img}
                    screen={item.screen}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rStyle: {
        flex: 1,
        height: "100%",
        overflow: 'scroll'
    },

    btnContainer: {
        //  justifyContent: "center"
    }
})

export default Index;
