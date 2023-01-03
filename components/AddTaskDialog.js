import { View, Text,Modal,TextInput, Pressable, Dimensions,Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { clr,styles } from '../styles';
import { dateOptions } from '../dateOptions';

const AddTaskDialog = ({
  addNewTask, style,setAddTaskVisible,addTaskVisible
}) => {
  const [title, setTitle] = useState('');
  const [dueDatetime,setDueDatetime] = useState(new Date())
  const [estTime,setEstTime] = useState(0);
  const datePickerRef = useRef(null);

  const updateDueDatetime = (e,date) => {
    setDueDatetime(date);
    e.close
  }
  return (
    <View style={{ 
      ...styles.centeredOverlay,
      display: addTaskVisible ? 'flex' : 'none'
    }}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={addTaskVisible}
        onRequestClose={()=>setAddTaskVisible(false)}
      >
        <View style={{
          ...styles.centeredOverlay,
        }}>
          <View style={{
            ...styles.addTaskDialog,
            ...styles.dialogShadow,
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent:'space-between',
            }}>
              <Text style={{...styles.dialogTitle,color:clr.dark}}>Add Task</Text>
              <Pressable onPress={()=>setAddTaskVisible(false)}>
                <AntDesign name='closecircle' color={clr.darker} size={28}/>
              </Pressable>
            </View>
            <Text style={{...styles.dialogLabel, marginTop: 8}}>What's the task?</Text>
            <TextInput 
              onChangeText={setTitle}
              value={title}
              style={{
                ...styles.dialogInput
              }}
              selectionColor={clr.light}
            />
            <Text style={{...styles.dialogLabel, marginTop: 8}}>When is it due?</Text>
            <Pressable
              onChangeText={setTitle}
              value={title}
              style={{
                ...styles.dialogInput,
              }}
              selectionColor={clr.light}
              onPress={()=>datePickerRef.current.click()}
            >
              <View style={{
                opacity:1,
              }}>
                <RNDateTimePicker 
                  value={dueDatetime} 
                  onChange={updateDueDatetime}
                  textColor={clr.light}
                  accentColor={clr.light}
                  themeVariant='dark'
                />
              </View>
            </Pressable>
            <Text style={{...styles.dialogLabel, marginTop: 8}}>How long will it take?</Text>
            <View style={styles.hoursContainer}>
              <Pressable style={styles.hoursInput}/>
              <Text style={styles.hoursLabel}>Hours</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AddTaskDialog