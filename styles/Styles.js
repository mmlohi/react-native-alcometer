import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const colors = {
  color1: '#03aa1c',
  color2: '#ffff04',
  color3: '#ff0303',
  color4: '#eeeded',
  color5: '#5e5d5d',
  color6: '#ffffff',
  color7: '#040000'
};

const LightStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 5,
    backgroundColor: colors.color4,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  columnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    fontSize: 12,
  },
  header: {
    fontSize: 35,
    color: colors.color7,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
  },
  label: {
    color: colors.color7,
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 10,
    textAlign: 'center',

  },
  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 120,
    fontSize: 18,
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.color1,
    padding: 10,
    margin: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.color6,
    textAlign: 'center',
  },
  submitContainer: {
    alignItems: 'center',
  },
  submit: {
    width: 180,
    borderWidth: 1,
    borderRadius: 10,
    color: colors.color6,
    backgroundColor: colors.color1,
    padding: 15,
    margin: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  numericInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonStyle: {
    borderColor: colors.color1,
    borderRadius: 10,
  },
  numericInput: {
    paddingLeft: 10,
    borderWidth: 5,
    borderColor: colors.color1,
    backgroundColor:colors.color6,
    
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  resultText: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor:colors.color6,
    bottom:10,
    borderRadius: 10,
  },
});

const DarkStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 5,
    backgroundColor: colors.color5,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  columnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    fontSize: 12,
    color: colors.color6,
  },
  header: {
    fontSize: 35,
    color: colors.color6,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
  },
  label: {
    color: colors.color6,
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 10,
    textAlign: 'center',
  },
  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 120,
    fontSize: 18,
    paddingLeft: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.color1,
    padding: 10,
    margin: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.color6,
    textAlign: 'center',
  },
  submitContainer: {
    alignItems: 'center',
  },
  submit: {
    width: 180,
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    backgroundColor: colors.color1,
    padding: 15,
    margin: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  numericInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonStyle: {
    borderColor: colors.color1,
    borderRadius: 10,
  },
  numericInput: {
    paddingLeft: 10,
    borderWidth: 5,
    borderColor: colors.color1,
    backgroundColor:colors.color6,
    
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    color: colors.color6,
    fontWeight: 'bold',
    fontSize: 24,
  
  },
  resultText: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor:colors.color6,
    borderRadius: 10,
  },
});

export { LightStyle, DarkStyle, colors};
