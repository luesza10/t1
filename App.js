import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,AsyncStorage } from 'react-native';
import {Ionicons,MaterialComunityIcons} from '@expo/vector-icons';
import init from  'react_native_mqtt';

const topicsub = "led1client";
const topic = "led1server"

init ({
    size:10000,
    StorageBackend: AsyncStorage,
    defaultExpires: 1000 = 3600 = 24,
    enableCache: true ,
    reconnect: true ,
    sync : {
    }
});
export default function App() {
  useEffect ( () => {
    console.log("mounted");
    setIsLED1Disabled(true);
  },[])
const onMessageArrived =(message)=>{
  console.log("onMessageArrived:"+message.payloadString);
  if(message.payloadString == "led1:pong"){
    onLED1Connect();
  }
}
const onLED1Connect = () => {
  console.log("led connected");
  setIsLED1Disabled(false);
}
const onConnect =() =>{
  console.log("onConnect");
  setIsLED1Disabled(false);
} 
const onLight =()=>{
  client.publish(topic,"power");
}
const [IsLED1Disabled, setIsLED1Disabled] = useState(0);
const client = new Paho.MQTT.Client('133.211.13.211', 9001, 'clientname');
client.onMessageArrived = onMessageArrived;
client.connect({onSuccess:onConnect, useSSL: false, userName:'mqttusername',password:'mqttpassword'});


  return(
    <view style={styles.container}>
    <view
      style={styles.buttonContainer}
    >

       <text style={styles.buttonText}>led1</text>
       <TouchableOpacity
        style={}></TouchableOpacity> 
    </view>
     //eiei
    </view>
  )





};
