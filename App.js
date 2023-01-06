import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image, TextInput, Dimensions, Animated, Button,Alert, TouchableOpacity } from 'react-native';
import Footer from './components/Footer';
import Body from './components/Body';
import Start from './components/Start';
import AddTaskDialog from './components/AddTaskDialog';
import { clr } from './styles';
import { useEffect, useState } from 'react';

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
let nextId = 4;


export default function App() {
  //manage dialog open state
  const [settingsVisible,setSettingsVisible] = useState(false);
  const [addTaskVisible,setAddTaskVisible] = useState(false);
  const [taskList,setTaskList] = useState([])
  
  const addNewTask = (task) => {
    const list = [...taskList,{id: nextId++, ...task}];
    //sort by earliest due date
    list.sort((a,b) => a.dueDatetime.getTime() - b.dueDatetime.getTime());
    setTaskList(list);
  }

  //on app load, fetch list from async storage
  useEffect(() => {
    setTaskList(fillerList);
  },[])


  return (
    <>
    <Start/>
    <View style={{
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      backgroundColor: clr.dark,
      paddingHorizontal: 20,
      paddingTop: 20, //account for status bar height
    }}>
      <Body taskList={taskList}/>
      <Footer setSettingsVisible={setSettingsVisible} setAddTaskVisible={setAddTaskVisible}/>
    </View>
    <AddTaskDialog
      addTaskVisible={addTaskVisible}
      setAddTaskVisible={setAddTaskVisible}
      addNewTask={addNewTask}
    />
    </>
  );
}


