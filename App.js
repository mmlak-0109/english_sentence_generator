import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { words, create_simple_sentence } from './utils/_DATA'

export default function App() {
  const [randomSentence, setRandomSentence] = useState('')

  const onPress = () => (
    setRandomSentence(create_simple_sentence(words))
  )

  return (
    <View style={styles.container}>
      <Text>{randomSentence}</Text>
      <TouchableOpacity
        onPress={onPress}>
          <Text>Generate Random Sentence</Text>
        </TouchableOpacity>
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
});
