import { SafeAreaView,
         Text, 
         StyleSheet,
         ScrollView, 
         View, 
         Image, 
         TouchableOpacity,
         FlatList,
         Alert,
         Modal,
               } 
         from "react-native";
import Header from "../components/header";
import{Ionicons} from '@expo/vector-icons';
import React, { useState } from "react";
import NewsForm from "../components/NewsForm";
import sockjs from 'sockjs-client'
import {over} from 'stompjs'


let stompClient = null
export default function NyhetsView() {

    const [news, setNews]=useState([
        {title:''
        , fulltext:''
        , key:'0'}
        
    ]);

    const connect =() =>{
        let sock = new sockjs('http://localhost:8080/chat')
        stompClient = over(sock)
        stompClient.connect({},onConnected,onError) 
    }
    const onConnected =() =>{
       
        setNews({...news,'connected':true})
        stompClient.subscribe('/chatroom',(payload) => showMessageOutput(JSON.parse(payload.body)))
        sendMessage()

    }
    handelMessage = (event) => {
        const {value} = event.target
        setNews({...news,"fulltext":value})
    }
    const sendMessage = () =>{
        let newsMessage = {
            title: news.title,
            fulltext: news.fulltext
        }
        console.log(newsMessage)
        stompClient.send('/massMailing/messages',{},JSON.stringify(newsMessage))   
        setNews({...news,'fulltext':''})
    } 



    const onError = err => console.log(err)

    const [modalWindow, setModalWindow]=useState(false);

    const addArticle=(article)=>{
        setNews((list)=>{
            article.key=Math.random().toString();
            return[
                article,
                ...list
            ]
        });
        setModalWindow(false);
    };

    const deleteArticle = () => {
      
      };

      const editArticle=()=>{

      };

      connect()
    return (
        <SafeAreaView  style={styles.background} >
        <Header />
        <Ionicons name="add-circle" 
                  style={styles.icon} 
                  onPress={()=>setModalWindow(true)}/>

        <Modal visible={modalWindow} >
            <View style={styles.modal}>
                <Ionicons name="close-circle" 
                          style={styles.icon}
                          onPress={()=>setModalWindow(false)}/>
                <NewsForm addArticle={addArticle}/>
            </View>
        </Modal>

        <ScrollView style={styles.scrollView}>

        <FlatList data={news} renderItem={({item})=>(
                <TouchableOpacity style={styles.newsBlock} 
                 onPress={()=>Alert.alert(
                    item.title,
                    item.fulltext,
                    
                    [
                     {text: "Ta bort",
                       onPress: ()=>deleteArticle(),
                      }, 

                      {text: "Redigera",
                       onPress: ()=>editArticle()
                      },

                      { text: "OK", 
                        onPress: () => console.log("OK Pressed") 
                      }
                    ]
                  )} >

                    <Text style={styles.newsTitle}>{item.title}</Text>
                    <Text style={styles.newsText}>{item.fulltext}</Text>
                </TouchableOpacity>
        )}>
        </FlatList>           
        </ScrollView>
        </SafeAreaView>
    )}

    const styles = StyleSheet.create({
        background:{
            color: "#4682B4",
    
        },

        icon:{
            color: "#4682B4",
            fontSize: 50,
            textAlign:"center"
        },

        modal:{
            height:"95%",
            borderRadius:15,
            margin:20,
            padding:10,
            backgroundColor: "#d9f1ff",
        },

        modalHeader:{
            height: 40,
            //borderRadius: 15,
            textAlign:"center",
            textAlignVertical: "center",
            
            fontSize: 20,
            fontWeight: "normal",
            color: "#4682B4",
        },

        scrollView:{
            height:630,
            backgroundColor:"#4682B4",
            padding:10,
        },

        newsBlock:{
            
            height:150,
            backgroundColor:"#fff",
            margin:10,
            borderRadius:15,
            overflow:"hidden",
            
        },

        newsTitle:{
            textAlign:"center",
            fontSize:20,
            margin:10,
            color:"#4682B4",
            borderBottomWidth:1,
            borderBottomColor:"#4682B4",
            paddingBottom:10,
            
        },

        newsText:{
            textAlign:"center",
            margin:10,
            height:53,
        },
    })
