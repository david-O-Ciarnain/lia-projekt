import { SafeAreaView,
    Text, 
    StyleSheet,
    ScrollView, 
    View, 
    TouchableOpacity,
    Alert,
    Modal,
    Button,
    TextInput, } 
    from "react-native";
import Header from "../components/header";
import{Ionicons} from '@expo/vector-icons';
import React, { useState } from "react";
import { Formik } from "formik";
import sockjs from 'sockjs-client'
import {over} from 'stompjs'
import axios from 'axios'

let stompClient = null
export default function NewsForm({addArticle}) {
    const [news, setNews]=useState([
        {
        title:'',
        fulltext:''
        }
    
    ]);

    function post(path,data){
        return axios.get('/csrf')
        .then(tokenResp => {
            let config = {
                headers:{
                    'X-CSRF-TOKEN': tokenResp.data.token,
                }
            }
            return axios.post(path,data,config)
        })
        .then(res => res.data)
    }
   let headerName = '${X-CSRF-TOKEN}'
    let token = '${_csrf.token}'
    let headers ={}
    headers[headerName] = token

    let sendData = {
        title: news.title,
        fulltext: news.fulltext
    }

    const connect =() =>{
        let sock = new sockjs('http://localhost:8080/chat')
        stompClient = over(sock)
        stompClient.connect({headers},onConnected,onError) 
        
    }
    
    const onConnected =() =>{
       
        setNews({...news,'connected':true})
        stompClient.subscribe('/chatroom',(payload) => showMessageOutput(JSON.parse(payload.body)))
        sendMessage()

    }
   

    const sendMessage = () =>{
        let newsMessage = {
            title: news.title,
            fulltext: news.fulltext
        }
        console.log(newsMessage)
        stompClient.send('/massMailing/messages',{},JSON.stringify(newsMessage))   
        setNews({...news,"title":''})
        setNews({...news,'fulltext':''})
    } 



    const onError = err => console.log(err)
       connect()
    return(
       
        <View >
            <Formik 
                initialValues={{title:'', fulltext:''}}
                onSubmit={(values, action)=>{
                    addArticle(values);
                    action.resetForm();
                }}>
                    {(props)=>(
                        <View>
                            <TextInput multiline
                                style={styles.title}
                                value={props.values.title}
                                placeholder='Titel'
                                onChangeText={props.handleChange('title')}/> //

                            <TextInput multiline
                                style={styles.fulltext}
                                value={props.values.fulltext}
                                placeholder='Text'
                                onChangeText={props.handleChange('fulltext')}/> //

                            <Button 
                            title="Lägg till nyhet" 
                            onPress={props.handleSubmit}/>

                        </View>
                    )}

            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    
    title:{
        height:70,
        borderWidth:1,
        borderRadius:15,
        margin:10,
        padding:10,
        borderColor:"#4682B4",
        textAlignVertical:"top",
        backgroundColor:"#fff",
    },

    fulltext:{
        height:400,
        borderWidth:1,
        borderRadius:15,
        marginLeft:10,
        marginRight:10,
        marginBottom:30,
        marginTop:20,
        padding:10,
        borderColor:"#4682B4",
        textAlignVertical:"top",
        backgroundColor:"#fff",
    },
   
})