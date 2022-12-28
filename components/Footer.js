import { View, Text,Button,StyleSheet,Pressable } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { clr } from '../styles';
import { styles } from '../styles';

const Footer = ({
  setSettingsVisible,
  setAddTaskVisible
}) => {
  const [pressSetting,setPressSetting] = useState(false);
  const [pressAddTask,setPressAddTask] = useState(false);
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
      paddingVertical: 20,
    }}>
      <Pressable style={[styles.buttonContainer,{opacity: pressSetting ? 0.6 : 1}]} 
        onPressIn={()=>setPressSetting(true)} 
        onPressOut={()=>setPressSetting(false)}
        onPress={()=>setSettingsVisible(true)}
      >
        <FontAwesome name="gear" color={clr.light} size={70}/>
        <Text style={[styles.buttonText,
       ]}>Settings</Text>
      </Pressable>
      <Pressable style={[styles.buttonContainer,{opacity: pressAddTask ? 0.6 : 1}]} 
        onPressIn={()=>setPressAddTask(true)} 
        onPressOut={()=>setPressAddTask(false)}
        onPress={()=>setAddTaskVisible(true)}
      >
        <FontAwesome name="plus-circle" color={clr.light} size={70}/>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  )
}

export default Footer