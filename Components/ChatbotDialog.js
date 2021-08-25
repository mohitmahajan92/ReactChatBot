import React, { Component } from "react";
// import { FAB } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import { StyleSheet, Text, View, Image } from 'react-native';
import DialogHeader from '../Components/ChatbotHeader'
import { FAB } from 'react-native-elements';




// import heaaaa from '../img/chatbot_head_image.png';


class ChatbotDialog extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50, alignItems: "center" }}>

        {/* <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => this.RBSheet.open()}
  /> */}

        {/* <Image source={require('../img/chatbot_head_image.png')}  */}
        <FAB

          onPress={() => this.RBSheet.open()}
          placement="right"
          title="ASK ME"
        


          icon={() => (
            <Image
              source={require('../img/chatbot_head_image.png')}
              style={{ width: 30, height: 30 }}

            />
          )}
          color="red" />





        {/*   <Image source={require('../img/chatbot_head_image.png')} style={{width:30,height:20}}/> */}
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              borderRadius: 20,
              margin: 10
            }
          }}
        >

          <DialogHeader />

        </RBSheet>


      </View>
    );
  }
}
/* const YourOwnComponent = () =>  <DialogHeader/>; */

// const YourOwnComponent = () => { return  ( <DialogHeader/>)}  ;
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,

  },
})

export default ChatbotDialog;

