import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { styles } from '../styles'

const Header = (
  ss
) => {
  return (
    <View style={{
      textAlign: 'left',
      width: '100%',
    }}>
      <Text style={{
        marginTop: 20, 
      ...styles.h1
      }}>Heads Up</Text>
      <Text style={styles.subtitle}>The Best Reminder for UBC Students</Text>
    </View>
  )
}

export default Header