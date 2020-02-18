import React, { Component } from 'react';
import {
  View, ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { HeaderHeightContext } from '@react-navigation/stack';

import Message from '../../components/Message/Message';
import UserInput from '../../components/UserInput/UserInput';

type Props = {
  messageList: Array<Object>;
}

type State = {
  userInput: String;
  messageList: Array<Object>;
  userInputStyle: Object;
}

class Conversation extends Component<Props, State> {

  static defaultProps = {
    messageList: [
      {
        id: '0',
        text: 'Hi, I am a user',
        createdAt: '2020-01-29T14:48:00.000Z',
        isUser: true,
        status: "Seen",
      },
      {
        id: '1',
        text: 'Hi, I am not a user',
        createdAt: '2020-02-08T05:30:00.000Z',
        isUser: false,
        status: "Seen",
      },
      {
        id: '2',
        text: 'This is a long diatribe about how life is when i"m programming and doing other things.',
        createdAt: '2020-02-09T17:21:00.000Z',
        isUser: true,
        status: "Seen",
      },
      {
        id: '3',
        text: 'And another to see how this looks when there are two messages back to back.',
        createdAt: '2020-02-09T17:28:00.000Z',
        isUser: true,
        status: "Seen",
      },
    ]
  }

  state: State = {
    userInput: "",
    messageList: this.props.messageList,
    userInputStyle: { paddingBottom: 20 },
  }

  componentDidMount(){
    Keyboard.addListener('keyboardWillShow', () => {
      this.setState({ userInputStyle: { paddingBottom: 3 }});
    })

    Keyboard.addListener('keyboardWillHide', () => {
      this.setState({ userInputStyle: { paddingBottom: 20 }});
    })
  }

  componentWillUnmount(){
    Keyboard.removeAllListeners();
  }

  isConsecutiveMessage = idx => {
    const { messageList } = this.state;

    return !!messageList[idx - 1] && messageList[idx].isUser === messageList[idx - 1].isUser;
  }

  handleTextChange = text => this.setState({ userInput: text});

  sendMessage = () => {
    this.setState( state => {
      const newMessage = {
        id: String(state.messageList.length),
        text: state.userInput,
        createdAt: new Date().toISOString(),
        isUser: true,
        status: 'sent',
      };

      return {
        messageList: [ ...state.messageList, newMessage ],
        userInput: '',
      };
    });

    Keyboard.dismiss();
  };

  render(){
    const { messageList, userInput, userInputStyle } = this.state;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={HeaderHeightContext._currentValue}
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <ScrollView
          style={{ width: '100%', flex: 1 }}
          contentContainerStyle={{
            justifyContent: 'flex-end',
            paddingBottom: 30,
          }}
        >
          {
            !!messageList.length &&
            messageList.map((message, idx) => (
              <Message
                key={message.id}
                message={message}
                showAvatar={!this.isConsecutiveMessage(idx)}
                style={this.isConsecutiveMessage(idx) ? { marginTop: 2 } : {}}
                conversation={{
                  nonUser: {
                    avatarSrc: 'https://www.fillmurray.com/100/100',
                  },
                  user: {
                    avatarSrc: 'https://www.fillmurray.com/200/200',
                  }
                }}
              />
            ))
          }
        </ScrollView>
        <UserInput
          value={userInput}
          placeholder="Send a message..."
          onChangeText={this.handleTextChange}
          onPress={this.sendMessage}
          style={userInputStyle}
        />
      </KeyboardAvoidingView>
    );
  };
};

export default Conversation;