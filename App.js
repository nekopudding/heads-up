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
    }}>
      <Header/>
      <Body/>
      <Footer/>
    </View>
    
    </>
  );
}


