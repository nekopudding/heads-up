import { StyleSheet } from "react-native";

export const clr = {
  light: '#cfdff9',
  dark: '#4c618c',
  darker: '#283654',
}
export const styles = StyleSheet.create({
  textLight: {
    color: clr.light
  },
  textDark: {
    color: clr.dark
  },
  iconButtonLight: {
    color: clr.light,
    fill: clr.light
  },
  h1: {
    fontSize: 48,
    fontWeight: '800',
    color: clr.light
  },
  subtitle: {
    fontSize: 16,
    color: clr.light,
  },
  h2: {
    marginTop: 28,
    textTransform: 'capitalize',
    fontWeight: '800',
    fontSize: 22,
    color: clr.light
  }
})