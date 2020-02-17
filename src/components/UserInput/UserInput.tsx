import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';

type Props = {
  value: String;
  placeholder: String;
  onChangeText: Function;
  onPress: Function;
}

const UserInput = ({ value, placeholder, onChangeText, onPress}: Props) => (
  <View style={styles.UserInput}>
    <TextInput
      style={styles.TextInput}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      multiline={true}
    />
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.Button_Text}>Send</Text>
    </TouchableOpacity>
  </View>
);

export default UserInput;