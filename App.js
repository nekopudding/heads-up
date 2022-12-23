import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image, TextInput, Dimensions, Animated, Button,Alert, TouchableOpacity } from 'react-native';
import Footer from './components/Footer';

import Body from './components/Body';
import Splash from './components/Splash';
import { clr } from './styles';

export default function App() {
  return (
    <>
    <Splash/>
    <View style={{
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      backgroundColor: clr.dark,
      paddingHorizontal: 20,
      paddingTop: 20, //account for status bar height
    }}>
      <Body/>
      <Footer/>
    </View>
    
    </>
  );
}


