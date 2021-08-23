

import React, { Component } from "react";
import { StyleSheet, Text, View,Button,Image } from 'react-native';

export default class AddButton extends React.Component
{
    render() {
        return(
          <View style={styles.container}>
           
              <Image source={require('../img/minimize.png')} />
              <Image source={require('../img/chatbot_head_image.png')} 
               style={{ width: 40, height: 40,marginLeft:100}}/>
         
              
              
              
              <Text>X Bot</Text></View>
            

        )



    }



}

const styles=StyleSheet.create({
    container: {
     
        flexDirection: 'row',
        margin:5,
        minWidth: "100%",
         minHeight: 40,
         alignItems:"center"
      },
      // buttonContainer: {
      //   flex: 1,
      // }
    
    })