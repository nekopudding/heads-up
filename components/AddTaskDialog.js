import { View, Text,Modal,TextInput, Pressable, Dimensions,Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import RNDateTimePicker from '@react-native-community/datetimepicker'
import DropDownPicker from 'react-native-dropdown-picker';
import { clr,styles } from '../styles';
import Ripple from 'react-native-material-ripple';

const hours = [
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
  {label: '6', value: 6},
  {label: '7', value: 7},
  {label: '8', value: 8},
]

const AddTaskDialog = ({
  addNewTask, style,setAddTaskVisible,addTaskVisible
}) => {
  const [title, setTitle] = useState('');
  const [dueDatetime,setDueDatetime] = useState(new Date())
  const datePickerRef = useRef(null);
  const [hourOpen,setHourOpen] = useState(false);
  const [hourValue, setHourValue] = useState(null);
  const [hourItems,setHourItems] = useState(hours)

  const updateDueDatetime = (e,date) => {
    setDueDatetime(date);
    e.close
  }
  const addTask = ()=> {
    if(title.trim() === '' || !dueDatetime || !hourValue) {
      return Alert.alert('Make sure to fill all fields.');
    }
    const newTask = {
      title: title,
      dueDatetime: dueDatetime,
      estTime: hourValue
    }
    addNewTask(newTask);
    setHourValue(null);
    setDueDatetime(null);
    setTitle('');
    setAddTaskVisible(false);
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
              <DropDownPicker
                open={hourOpen}
                value={hourValue}
                items={hourItems}
                setOpen={setHourOpen}
                setValue={setHourValue}
                setItems={setHourItems}
                style={styles.hours}
                containerStyle={styles.hoursContainer2}
                textStyle={styles.hoursText}
                labelStyle={styles.hoursItemLabel}
                placeholder=""
                dropDownDirection='TOP'
                dropDownContainerStyle={styles.dropdown}
                arrowIconContainerStyle={{
                  borderRadius: 9999,
                  backgroundColor: clr.light,
                  width: 24,
                  height: 24,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                autoScroll={true}
              />
              <Text style={styles.hoursLabel}>Hours</Text>
            </View>
            <View style={styles.submitContainer}>
              <Ripple rippleColor={clr.light} rippleSize={200} 
                rippleContainerBorderRadius={9999} 
                style={styles.submit}
                onPressOut={addTask}
              >
                <Text style={styles.submitText}>Give Me a Heads Up</Text>
              </Ripple>
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AddTaskDialog