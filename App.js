import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image, TextInput, Dimensions, Animated, Button,Alert, TouchableOpacity } from 'react-native';
import Footer from './components/Footer';

import Body from './components/Body';
import Splash from './components/Splash';
import { clr } from './styles';
import { useState } from 'react';

const fillerList = [
  {
    id: '1',
    title: 'CPEN 441 Assignment 2',
    dueDatetime: new Date(2022,10,14,23,59),
    estTime: 5, //hours
  },
  {
    id: '2',
    title: 'Job Application Deadline',
    dueDatetime: new Date(2022,10,15,12),
    estTime: 5, //hours
  },
  {
    id:'3',
    title: 'CPEN 441 Quiz 2',
    dueDatetime: new Date(22,10,16,13),
    estTime: 5, //hours
  }
];

export default function App() {
  //manage dialog open state
  const [settingsVisible,setSettingsVisible] = useState(false);
  const [addTasksVisible,setAddTasksVisible] = useState(false);
  const [taskList,setTaskList] = useState(fillerList)
  
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
      <Body taskList={taskList}/>
      <Footer setSettingsVisible={setSettingsVisible} setAddTasksVisible={setAddTasksVisible}/>
    </View>
    
    </>
  );
}


