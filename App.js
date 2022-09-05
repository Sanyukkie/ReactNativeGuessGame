import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';



export default function App() {

  const [RandomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [text, setText] = useState('Guess a number between 1-100');
  const [guess, setGuess] = useState('');
  const [amount, setAmount] = useState(0);
 
  
  const checkGuess = () => {
    if (guess < RandomNumber) {
      setText("Your guess " + guess + " is too low")
      setAmount(amount+1);
    }else if(guess > RandomNumber){
      setText("Your guess " + guess + " is too high")
      setAmount(amount+1)
    }else{
      setAmount(amount+1)
      Alert.alert("You guessed the number in "+ amount + " guesses!")
    }
  }



  return (
    <View style={styles.container}>

      <Text>{text}</Text>
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={guess => setGuess(guess)}
        value={guess}
        numeric
        keyboardType={'numeric'}
      />

      <View style={styles.button_row}>
        <Button onPress={checkGuess} title="Make a guess" />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_row: {
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
