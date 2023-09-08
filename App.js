
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Styles, { DarkStyle, LightStyle } from './styles/Styles.js';
import NumericInput from "react-native-numeric-input";
import { RadioButton, Switch } from 'react-native-paper';

export default function App() {
  // State variables
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [resultText, setResultText] = useState('');
  const [resultColor, setResultColor] = useState('black');
  const [radioval, setRadioval] = useState("male");
  const [isDarkStyle, setIsDarkStyle] = useState(false);
  const info = isDarkStyle ? "Switch to Light Theme" : "Switch to Dark Theme";
  const currentStyle = isDarkStyle ? DarkStyle : LightStyle;

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
      resultColor = 'green';
    } else if (alcoholConsentration <= 0.5 || alcoholConsentration <= 0.22) {
      resultText = 'You may be impaired. Your blood alcohol concentration is ' + alcoholConsentration.toFixed(2) + '‰.';
      resultColor = '#FFD700';
    } else {
      resultText = 'Do not drive! Your blood alcohol concentration is ' + alcoholConsentration.toFixed(2) + '‰.';
      resultColor = 'red';
    }
    setResultText(resultText);
    setResultColor(resultColor);
  };

  return (
    <ScrollView contentContainerStyle={currentStyle.container}>
      <View style={currentStyle.columnContainer}>
      <Switch style={currentStyle.switch} value={isDarkStyle} color='green'
          onValueChange={newValue => setIsDarkStyle(newValue)}
          thumbColor={isDarkStyle ? '#0fa817' : 'red'}
          trackColor={{ false: 'grey', true: 'yellow' }}
        />
        <Text style={currentStyle.info}>{info}</Text>
      </View>
      <Text style={currentStyle.header}>Alcometer</Text>
      <RadioButton.Group
        onValueChange={newValue => setRadioval(newValue)}
        value={radioval}
      >
        <View style={currentStyle.radioStyle}>
          <RadioButton
            labelStyle={currentStyle.radioButton}
            value='male'
            color='green'
          />
          <Text style={currentStyle.radioText}>Male</Text>
          <View style={currentStyle.radioStyle}>
            <RadioButton
              labelStyle={currentStyle.radioButton}
              value='female'
              color='green'
            />
          </View>
          <Text style={currentStyle.radioText}>Female</Text>
        </View>
      </RadioButton.Group>
      <Text style={currentStyle.label}>Weight</Text>
      <View style={currentStyle.textInputContainer}>
        <TextInput
          style={currentStyle.textInput}
          keyboardType="decimal-pad"
          onChangeText={(text) => setWeight(text)}
          placeholder="   (kg)"
        />
      </View>
      <Text style={currentStyle.label}>Bottles</Text>
      <View style={currentStyle.numericInputContainer}>
        <NumericInput
          inputStyle={currentStyle.numericInput}
          onChange={(value) => setBottles(value)}
          minValue={0} // Prevent input of negative values.
        />
      </View>
      <Text style={currentStyle.label}>Hours</Text>
      <View style={currentStyle.numericInputContainer}>
        <NumericInput
          inputStyle={currentStyle.numericInput}
          onChange={(value) => setTime(value)}
          minValue={0} // Prevent input of negative values.
        />
      </View>
      <TouchableOpacity onPress={calculateAlcoholConsentration}>
        <View style={currentStyle.submitContainer}>
          <Text style={currentStyle.submit}>CALCULATE</Text>
        </View>
      </TouchableOpacity>
      <Text style={[currentStyle.resultText, { color: resultColor }]}>{resultText}</Text>
    </ScrollView>
  );
}
