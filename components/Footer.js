import { View, Text,Button } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 40,
      paddingVertical: 20,
      borderColor: 'black',
      borderWidth: 1,
    }}>
      <View>
        <Button 
          title='a'
        />
        <Text>Settings</Text>
      </View>
      <View>
        <Button 
          title='b'
        />
        <Text>Add Tasks</Text>
      </View>
    </View>
  )
}

export default Footer