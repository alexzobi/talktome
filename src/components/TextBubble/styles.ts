import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  TextBubble: {
    backgroundColor: '#408DFF',
    borderRadius: 16,
    borderBottomRightRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: '75%',
  },
  "TextBubble-nonUser": {
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 3,
    backgroundColor: '#DCDFE9',
  },
  TextBubble_Text: {
    fontSize: 18,
    color: 'white',
  },
  "TextBubble_Text-nonUser": {
    color: 'black',
  },
})