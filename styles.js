import { StyleSheet,Dimensions } from "react-native";

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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:9999,
    height:70*1.5,
    aspectRatio:1,
  },
  buttonText: {
    color: clr.light,
    fontWeight: '600',
    fontSize: 16,
  },
  centeredOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 1000
  },
  dialogShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:2
    },
    shadowOpacity: 0.4,
    shadowRadius:3,
    elevation:5
  },
  addTaskDialog: {
    width: 300,
    height: 380,
    backgroundColor:clr.light,
    borderRadius: 16,
    padding: 16,
  },
  dialogTitle: {
    textTransform: 'capitalize',
    fontWeight: '800',
    fontSize: 28,
    color: clr.dark
  },
  dialogLabel: {
    fontWeight:'700',
    fontSize: 20,
    color: clr.dark
  },
  dialogInput: {
    justifyContent:'center',
    paddingHorizontal: 16,
    height: 48, 
    borderRadius: 16,
    backgroundColor: clr.dark,
    marginVertical: 4,
    color: clr.light,
    fontSize: 18,
  },
  hoursContainer: {
    flexDirection:'row',
    alignItems:'center'
  },  
  hoursInput: {
    justifyContent:'center',
    paddingHorizontal: 16,
    height: 48, 
    width: 40,
    borderRadius: 16,
    backgroundColor: clr.dark,
    marginVertical: 4,
    color: clr.light,
    fontSize: 18,
  },
  hoursLabel: {
    color: clr.dark,
    fontSize: 18,
    marginLeft: 8,
    fontWeight: '500'
  }
})