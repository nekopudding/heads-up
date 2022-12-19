import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image, TextInput, Dimensions } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  return (
    <>
    <View style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    }}>
      <Header/>
      <Main/>
      <Footer/>
    </View>
    
    </>
  );
}


