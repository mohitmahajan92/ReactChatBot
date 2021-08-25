import React, { Component } from "react";
import { StyleSheet, Text, View,Button,Image,SafeAreaView,TextInput  } from 'react-native';

export default class DataInput extends React.Component
{
    render() {
        return(
            <View style={styles.container}>  
            <View style={styles.innerContainer}>  
   <TextInput
          style={styles.textStyle}  
         placeholder="Write your query" />

<Button
  title="Send"
  color="#841584"

/>

                  </View>
                  </View>
        )
    }
}

const styles = StyleSheet.create({  
    container: {  
     
        padding: 26,  
        backgroundColor: "#fff",  
        justifyContent: "flex-start"  
    },  
    innerContainer:{  
       // flex: 1,  
        width: "100%",  
        flexDirection: "row",  
        justifyContent: "space-between",  
        alignItems: "center"  
    },  
    textStyle:{  
        width: "70%",  
        height: 40,
        padding: 10,
        borderWidth: 1,
        
    },  
    buttonStyle:{  
        width: "30%",  
    }  
}); 