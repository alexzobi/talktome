import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  isUser: Boolean;
  text: String;
  style: Object;
}

const TextBubble = ({ isUser, text, style }: Props) => (
  <View
    style={[
      styles.TextBubble,
      !isUser && styles['TextBubble-nonUser'],
      style,
    ]}
  >
    <Text
      style={[
        styles.TextBubble_Text,
        !isUser && styles['TextBubble_Text-nonUser']
      ]}
    >
      {text}
    </Text>
  </View>
);

export default TextBubble;