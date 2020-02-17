import React, { Component } from 'react';
import { View, Text } from 'react-native';

type Props = {

}

type State = {

}

class Conversation extends Component<Props, State> {

  state: State = {
  }

  render(){
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Text>Home</Text>
      </View>
    );
  };
};

export default Conversation;