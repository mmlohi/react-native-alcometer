
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { DarkStyle, LightStyle, colors } from './styles/Styles.js';
import NumericInput from "react-native-numeric-input";
import { RadioButton, Switch } from 'react-native-paper';
import { useFonts } from 'expo-font';

export default function App() {

  // State variables
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [resultText, setResultText] = useState('');
  const [resultColor, setResultColor] = useState(colors.color8);
  const [radioval, setRadioval] = useState("male");
  const [isDarkStyle, setIsDarkStyle] = useState(false);
  const info = isDarkStyle ? "Switch to Light Theme" : "Switch to Dark Theme";
  const currentStyle = isDarkStyle ? DarkStyle : LightStyle;


  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/MontserratAlternates-Medium.ttf'),

  });

  if (!loaded) {
    return null;
  }
  const calculateAlcoholConsentration = () => {
    if (!weight) {
      // Display a warning alert if weight is not entered
      Alert.alert("Warning!", "Please enter your weight.");
      return;
    }

    // Calculate alcohol concentration
    const gramsLeft = ((bottles * 0.33) * 8 * 4.5) - ((weight / 10) * time);
    let alcoholConsentration;
    if (radioval === 'male') {
      alcoholConsentration = gramsLeft / (weight * 0.7);
    } else {
      alcoholConsentration = gramsLeft / (weight * 0.6);
    }

    if (alcoholConsentration < 0) {
      alcoholConsentration = 0;
    }

    // Set result color and text based on the result
    let resultText, resultColor;
    if (alcoholConsentration <= 0.0) {
      resultText = 'You are safe to drive. Your blood alcohol concentration is 0.0‰.';
      resultColor = colors.color1;
    } else if (alcoholConsentration <= 0.5 || alcoholConsentration <= 0.22) {
      resultText = 'You may be impaired. Your blood alcohol concentration is ' + alcoholConsentration.toFixed(2) + '‰.';
      resultColor = colors.color2;
    } else {
      resultText = 'Do not drive! Your blood alcohol concentration is ' + alcoholConsentration.toFixed(2) + '‰.';
      resultColor = colors.color3;
    }
    setResultText(resultText);
    setResultColor(resultColor);
  };



  return (
    <ScrollView contentContainerStyle={currentStyle.container}>
      <View style={currentStyle.columnContainer}>
        <Switch style={currentStyle.switch} value={isDarkStyle}
          onValueChange={newValue => setIsDarkStyle(newValue)}
          thumbColor={isDarkStyle ? colors.color1 : colors.color1}
          trackColor={{ false: colors.color5, true: colors.color6 }}
        />
        <Text style={currentStyle.info}>{info}</Text>
      </View>
      <Text style={currentStyle.header}>Alcometer</Text>
      <RadioButton.Group
        onValueChange={newValue => setRadioval(newValue)}
        value={radioval}
        color={colors.color6}
      >
        <View style={currentStyle.radioStyle}>
          <RadioButton
            value='male'
            color={colors.color1}
            uncheckedColor={isDarkStyle ? colors.color6 : colors.color7}
          />
          <Text style={currentStyle.radioText}>Male</Text>
          <View style={currentStyle.radioStyle}>
            <RadioButton
              value='female'
              color={colors.color1}
              uncheckedColor={isDarkStyle ? colors.color6 : colors.color7}
            />
            <Text style={currentStyle.radioText}>Female</Text>
          </View>
        </View>
      </RadioButton.Group>
      <Text style={currentStyle.label}>Weight</Text>
      <View style={currentStyle.textInputContainer}>
        <TextInput
          style={currentStyle.textInput}
          keyboardType="decimal-pad"
          onChangeText={(text) => setWeight(text)}
          placeholder="weight(kg)"
        />
      </View>
      <Text style={currentStyle.label}>Bottles</Text>
      <View style={currentStyle.numericInputContainer}>
        <NumericInput
          inputStyle={currentStyle.numericInput}
          onChange={(value) => setBottles(value)}
          borderColor={colors.color1}
          rounded
          minValue={0} // Prevent input of negative values.
        />
      </View>
      <Text style={currentStyle.label}>Hours</Text>
      <View style={currentStyle.numericInputContainer}>
        <NumericInput
          inputStyle={currentStyle.numericInput}
          onChange={(value) => setTime(value)}
          borderColor={colors.color1}
          rounded
          minValue={0} // Prevent input of negative values.
        />
      </View>
      <TouchableOpacity onPress={calculateAlcoholConsentration}>
        <View style={currentStyle.submitContainer}>
          <Text style={currentStyle.submit}>CALCULATE</Text>
        </View>
      </TouchableOpacity>
      <Text style={[currentStyle.resultText, {
        color: resultText ? resultColor :
          isDarkStyle ? colors.darkPlaceholderColor : colors.lightPlaceholderColor
      }]}>
        {resultText ? resultText : 'Yours result comes here...'}
      </Text>
    </ScrollView>
  );
}
