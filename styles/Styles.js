import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const colors = {
  color1: '#03aa1c',
  color2: '#ffff04',
  color3: '#ff0303',
  color4: '#eeeded',
  color5: '#5e5d5d',   
  color6: '#ffffff',
  color7: '#040000',
  color8: 'rgba(124, 109, 109, 0.2)',
  color9: 'rgba(0, 0, 0, 0.2)',
  darkPlaceholderColor: '#cccccc', 
  lightPlaceholderColor: '#888888', 

};

const LightStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 5,
    backgroundColor: colors.color4,
    borderWidth: 1,
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
    borderWidth: 1.1,
    borderRadius: 10,
    borderColor: colors.color1,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.color6,
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
  numericInput: {
    borderWidth: 5,
    borderColor: colors.color1,
    backgroundColor: colors.color6,
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingRight: 10,
    paddingLeft:5,
  },
  resultText: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: colors.color8,
    bottom: 10,
    borderRadius: 10,
    padding: 10,  
    borderWidth: 1,
    borderColor: colors.color7,
  },
});

const DarkStyle = StyleSheet.create({
  container: {
  ...LightStyle.container,
    backgroundColor: colors.color5,     
  },
  columnContainer: {
  ...LightStyle.columnContainer,
  },
  switch: {
    ...LightStyle.switch
  },
  info: {
   ...LightStyle.info,
    color: colors.color6,
  },
  header: {
    ...LightStyle.header,
    color: colors.color6,   
  },
  label: {
    ...LightStyle.label,
    color: colors.color6,
  },
  textInputContainer: {
    ...LightStyle.textInputContainer,
  },
  textInput: {
  ...LightStyle.textInput,
    borderColor: colors.color1,
    backgroundColor: colors.color6,
    borderWidth: 1.1,
    borderColor: colors.color1,
  },
  submitContainer: {
   ...LightStyle.submitContainer,
  },
  submit: {
   ...LightStyle.submit,
    backgroundColor: colors.color1,
  },
  numericInputContainer: {
   ...LightStyle.numericInputContainer,
  },
  numericInput: {
   ...LightStyle.numericInput,
    borderColor: colors.color1,
    backgroundColor: colors.color6,
  },
  radioStyle: {
...LightStyle.radioStyle,
  },
  radioText: {
...LightStyle.radioText,
  },
  resultText: {
    ...LightStyle.resultText,
    backgroundColor: colors.color6,
    backgroundColor: colors.color9,
  },
});

export { LightStyle, DarkStyle, colors };
