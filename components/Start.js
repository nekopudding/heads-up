import { Text, View,Animated, Dimensions, Alert } from 'react-native'
import React, { useRef, useEffect } from 'react'
import Header from './Header';
import { clr,styles } from '../styles';

const Splash = () => {
  const splashOpacity = useRef(new
    Animated.Value(1)).current;
  
    useEffect(() => {
      Animated.timing(splashOpacity, {toValue: 0,duration:300,useNativeDriver: true,delay: 1000})
        .start();
        
    },[splashOpacity]);

  return (
    <Animated.View style={{
      ...styles.centeredOverlay,
      backgroundColor: clr.light,
      opacity:splashOpacity,
      
    }} pointerEvents='none'>
      <Text style={{
        marginTop: 20, 
        ...styles.h1,
        color: clr.dark
      }}>Heads Up</Text>
      <Text style={{...styles.subtitle, color: clr.dark}}>The Best Reminder for UBC Students</Text>
    </Animated.View>
  )
}

export default Splash;