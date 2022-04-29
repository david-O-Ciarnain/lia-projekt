import React from 'react'
import {
    Text,
    Button,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableHighlight,
    FlatList
} from 'react-native'
import TESTarrayImg from '../components/TESTarrayImg'
import Buttons from '../components/Buttons'
import Header from '../components/Header'

export default function Index() {
    return (
        <SafeAreaView>
            <Header />
            <FlatList data={TESTarrayImg} renderItem={({ item }) => {
                return <Buttons
                    title={item.title}
                    image={item.img}
                />
            }}
            />
        </SafeAreaView>
    )
}