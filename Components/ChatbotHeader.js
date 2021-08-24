

import React, { Component } from "react";
import { StyleSheet, Text, View,Button,Image } from 'react-native';

export default class AddButton extends React.Component
{
    render() {
        return(
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                <View style={{flex: 1, flexDirection: 'row'}} >
                <Image source={require('../img/minimize.png')} /></View>
                <View style={{flex: 1, flexDirection: 'row', height: 50}} >
                <Image source={require('../img/chatbot_head_image.png')} 
               style={{ width: 40, height: 40,   alignItems:"center"}}/>
                 <Text>X Bot</Text>
                 
               
                </View>
              
           
              </View>

         /*    <View>
          <View style={styles.container}>
           
              <Image source={require('../img/minimize.png')} />
               </View>
               <View style={{ alignItems:"center"}}>
           
              <Image source={require('../img/minimize.png')} />
               </View>
              <Image source={require('../img/chatbot_head_image.png')} 
               style={{ width: 40, height: 40,   alignItems:"center"}}/>
         
              
      
              
              <Text>X Bot</Text></View> */
            

        )



    }



}

const styles=StyleSheet.create({
    container: {
     
        flexDirection: 'column',
        margin:5,
        minWidth: "50%",
         minHeight: 20,
      /*    alignItems:"center" */
      },
      // buttonContainer: {
      //   flex: 1,
      // }
    
    })