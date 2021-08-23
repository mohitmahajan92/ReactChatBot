import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheetDialog from './Components/ChatbotDialog'

export default function App() {
  return (
       <BottomSheetDialog/>

  
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
