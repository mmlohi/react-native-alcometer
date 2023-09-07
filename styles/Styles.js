import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 5,
    backgroundColor: "#FFFFFF", 
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  switch: {
    alignSelf: "flex-end",
    marginVertical: 5,
  },
  header: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
  },
  label: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 10,
    textAlign: "center",
  },
  textInputContainer:{
    justifyContent: 'center', 
    alignItems: "center",
  },
  textInput: {
    width: 80,
    fontSize: 18,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    marginTop: 5,
    alignItems: "center",
    justifyContent: 'center', 
  },
  submitContainer:{
    alignItems: 'center', 
  },
  submit: {
    width: 180,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    backgroundColor: "green", 
    padding: 15,
    margin: 10,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  numericInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Keskitä vaakasuunnassa
    alignItems: 'center', // Keskitä pystysuunnassa
   
  },
  buttonStyle:
   { borderColor: "green",
    borderRadius: 10 },
  numericInput: {
    paddingLeft: 10,
    borderWidth: 5,
    borderColor: "green", 
    borderRadius: 5, 

  },
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
    
  },
  radioText:{
    fontWeight: "bold",
    fontSize: 18,
  },
  resultText: {
    fontSize: 24, 
    textAlign: 'center',
     
  }
});