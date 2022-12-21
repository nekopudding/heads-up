import { View, Text,ScrollView,Image,TextInput,Dimensions } from 'react-native'
import React from 'react'
import { clr, styles } from '../styles'

const Body = () => {
  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      width: Dimensions.get('window').width
    }}>
      <Text style={styles.h2}>most recent due:</Text>
      <TextInput 
        style={{
          marginTop: 16,
          marginHorizontal: 10,
          paddingHorizontal: 16,
          height: 60, 
          width: 300,
          borderRadius: 20,
          backgroundColor: clr.darker,
          color: clr.light,
          fontSize: 16,
          fontWeight: '500'
        }}
        defaultValue='Nothing at the moment.'
      />
      <Text style={styles.h2}>upcoming deadlines:</Text>

    </ScrollView>
  )
}

export default Body