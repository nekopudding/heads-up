import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image, TextInput, Dimensions } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';
import { clr } from './styles';

export default function App() {
  return (
    <>
    <View style={{
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      backgroundColor: clr.dark,
      paddingHorizontal: 20,
      paddingTop: 20, //account for status bar height
    }}>
      <Header/>
      <Body/>
      <Footer/>
    </View>
    
    </>
  );
}


