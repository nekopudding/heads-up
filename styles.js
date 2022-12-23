import { StyleSheet } from "react-native";

export const clr = {
  light: '#cfdff9',
  dark: '#4c618c',
  darker: '#1d2942',
}
export const styles = StyleSheet.create({
  textLight: {
    color: clr.light
  },
  textDark: {
    color: clr.dark
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
  },
  h3: {
    fontWeight: '500',
    fontSize: 18,
    color: clr.light
  },
  listItemDate: {
    fontWeight: '500',
    fontSize: 16,
    color: clr.darker
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: clr.light,
    fontWeight: '600',
    fontSize: 16,
  }
})