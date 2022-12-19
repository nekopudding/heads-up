import { View, Text,ScrollView,Image,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,
    flexGrow: 1
  },
});

const Main = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>abc</Text>
      <View>
        <Text>texxt</Text>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput 
        style={{height: 40, width:300,borderColor: 'white', borderWidth: 1}}
      />
    </ScrollView>
  )
}

export default Main