import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  UserInput: {
    minHeight: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 12,
    alignItems: 'flex-end',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    paddingTop: 3,
  },
  TextInput: {
    marginVertical: 3,
    marginRight: 6,
    borderRadius: 16,
    paddingHorizontal: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    flex: 1,
    fontSize: 18,
    minHeight: 32,
    maxHeight: 125,
    justifyContent: 'flex-start'
  },
  Button: {
    backgroundColor: '#408DFF',
    height: 32,
    borderRadius: 16,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  Button_Text: {
    color: 'white',
  },
})