import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { clr } from '../styles';
import { styles } from '../styles';

const Footer = () => {
  return (
    <View style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
      paddingVertical: 20,
    }}>
      <View style={styles.buttonContainer}>
        <FontAwesome name="gear" color={clr.light} size={70}/>
        <Text style={styles.buttonText}>Settings</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesome name="plus-circle" color={clr.light} size={70}/>
        <Text style={styles.buttonText}>Add Tasks</Text>
      </View>
    </View>
  )
}

export default Footer