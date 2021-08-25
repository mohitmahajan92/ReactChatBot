

import React, { Component } from "react";
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import axios from 'axios';

export default class AddButton extends React.Component
{
  constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = { color: 'lightgreen' };
  }

  componentDidMount() {
   const q= {
      "query":"hi",
      "responseType":"Text",
      "contexts": []
      }

    axios.post("http://52.147.193.71:8080/gateway/api/conversation-api-service/conversations",q, {
      headers: { token: "autho: eyJraWQiOiJNYmV1VmVVWlhVT2FJcDgwYmx1XC9sanFOQjNKZE9aSDgxQ3JGU0tpMmVcL2M9IiwiY3R5IjoiSldUIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImFsZyI6ImRpciJ9..cnMtWKTdGIaiD8_AL_cQ3g.eSCcvFUiW9A2mo0Owz26GSJE7rJ0gg0OL6HcRgkMUUDaxGC6mzrriGEdsh3-lUYUedcfRdwTEgjD86f8LhP51-eQupX05rb5GxvxyDQGgH78VdqbSe1yvBx7BvUosMZrFcC4bNLknj_tXfJU7HzXqx0ejszXw3A0Pc40cs5LCCutfOJ4fKZzLlRSMYfFse0zLrVJ8E0E_Wd2VeDdwxaIf7goto_OB77VSjA0DIFMy-rK9AC8KdOkR9bW2W-NynhqYreRMEl0uHiVEKPem10GAi-v2WevW0ygRLibvO9TOKgVI8RNzGD9qNtjFA4IlGaIvwVpIodcgWvC82BLuDXjQNhfFP8H8dVusc7gIObG0WzM1TI75eyiTX5Vd3B7L75yuj4tz7pSA9MEWNEttDyPZfOfbdRH6KPTPeyaO5xVp0zY3ykZ9Q9cYXAv587CTyv1FF9HFbiacnFbx9uRNuyv4G4dKAxUQK58dcwPi2oGV6flNU1za73rLZyngobhaJvda5qwBVT79uWB_tP9W-khQXw4CQnxKPkUdyGxDBH64M0AoGxrs_znZHyty7by3FQR2-jsxwraUQLoy81GnVtvUQ.GQJtG667F5ejnCtrs41klQ" },
    })
    .then((response) => {
      alert(response.data.response)
      console.warn("aaaaaaaa  "+ response.data.response)
      
    }).catch((error) => {});
}


  
    /* setTimeout(() => {
      this.setState({ color: 'wheat' });
    }, 2000);
  } */
    


    render() {
        return(
          <View>
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
              
               <Text style={{alignItems:'center',marginTop:50,marginLeft:50,fontSize:20}}>{this.state.color}</Text>
              </View>

         /*    <View>
          <View style={styles.container}>
           
              <Image source={require('../img/mi,nimize.png')} />
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