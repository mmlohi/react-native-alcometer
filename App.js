import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Styles from './styles/Styles.js';
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
  const [isOn, setIsOn] = useState(false);
  const info = isOn ? "Dark Theme" : "Light Theme";

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
      resultColor = '#ffff00';
    } else {
      resultText = 'Do not drive! Your blood alcohol concentration is ' + alcoholConsentration.toFixed(2) + '‰.';
      resultColor = 'red';
    }

    setResultText(resultText);
    setResultColor(resultColor);
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.columnContainer}>
      </View>
      <Text style={Styles.header}>Alcometer</Text>
      <RadioButton.Group
        onValueChange={newValue => setRadioval(newValue)}
        value={radioval}>
        <View style={Styles.radioStyle}>
          <RadioButton
            labelStyle={Styles.radioButton}
            value='male'
            color='green'
          />
          <Text style={Styles.radioText}>Male</Text>

          <View style={Styles.radioStyle}>
            <RadioButton
              labelStyle={Styles.radioButton}
              value='female'
              color='green'
            />
          </View>
          <Text style={Styles.radioText}>Female</Text>
        </View>
      </RadioButton.Group>
      <Text style={Styles.label}>Weight</Text>
      <View style={Styles.textInputContainer}>
        <TextInput
          style={Styles.textInput}
          keyboardType="decimal-pad"
          onChangeText={(text) => setWeight(text)}
          placeholder="weight (kg)"
        />
      </View>
      <Text style={Styles.label}>Bottles</Text>
      <View style={Styles.numericInputContainer}>
        <NumericInput
          inputStyle={Styles.numericInput}
          onChange={(value) => setBottles(value)}
          minValue={0} // Prevent input of negative values.
        />
      </View>
      <Text style={Styles.label}>Hours</Text>
      <View style={Styles.numericInputContainer}>
        <NumericInput
          inputStyle={Styles.numericInput}
          onChange={(value) => setTime(value)}
          minValue={0} // Prevent input of negative values.
        />
      </View>
      <TouchableOpacity onPress={calculateAlcoholConsentration}>
        <View style={Styles.submitContainer}>
          <Text style={Styles.submit}>CALCULATE</Text>
        </View>
      </TouchableOpacity>
      <Text style={[Styles.resultText, { color: resultColor }]}>{resultText}</Text>
    </ScrollView>
  );
}
