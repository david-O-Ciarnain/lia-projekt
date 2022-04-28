import React from 'react'
import {Text,
    Button,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableHighlight} from 'react-native' 
import Buttons from './Buttonsss' 

const renderingImg = Test.map(item => {

    return <Buttonsss 
        key={item.img}
        {...item}
    />
})

export default function Index(){

    return (
        <View>
        {renderingImg}
        </View>
    )
}