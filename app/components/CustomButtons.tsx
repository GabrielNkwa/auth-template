import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButtons = ({ onPress, text, type = 'PRIMARY' }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B71F3',

    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: 'black',
  },

  container_SECONDARY: {
    backgroundColor: 'red',
  },

  container_TERTIARY: {
    backgroundColor: 'green',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomButtons;
