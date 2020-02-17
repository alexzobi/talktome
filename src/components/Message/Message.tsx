import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import Display from '../UIKit/Display';
import TextBubble from '../TextBubble/TextBubble';
import Avatar from '../Avatar/Avatar';

type Props = {
  message: Object;
  conversation: Object;
  style: Object;
  showAvatar: Boolean;
}

type State = {
  showTimeStamp: Boolean;
}

class Message extends Component<Props, State> {

  state: State = {
    showTimeStamp: false,
  }

  toggleTimeStamp = () => {
    this.setState(state => ({ showTimeStamp: !!state.showTimeStamp }))
  }

  getTimeStamp = () => {
    const today = moment().format('M/D/YY');
    const { createdAt } = this.props.message;
    const date = moment(createdAt).format('M/D/YY');
    const time = moment(createdAt).format('LT');

    if (today === date){
      return time;
    }

    return `${date} at ${time}`;
  }

  render(){
    const { message, style, conversation, showAvatar } = this.props;
    const { showTimeStamp } = this.state;

    return (
      <View
        style={[
          {
            width: '100%',
            marginTop: 12,
          },
          message.isUser ? {
            alignItems: 'flex-end'
          }
          : {
            alignItems: 'flex-start'
          },
          style
        ]}
      >
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={this.toggleTimeStamp}
        >
          <Display when={!message.isUser && showAvatar}>
            <Avatar height={20} source={conversation.nonUser.avatarSrc} />
          </Display>
          <TextBubble
            text={message.text}
            isUser={message.isUser}
            style={showAvatar ? {} : { marginRight: 26 }}
          />
          <Display when={message.isUser && showAvatar}>
            <Avatar height={20} source={conversation.user.avatarSrc} />
          </Display>
        </TouchableOpacity>
        {/* <Display when={showTimeStamp}>
          <Text>{this.getTimeStamp()}</Text>
        </Display> */}
      </View>
    );
  };
};

export default Message;