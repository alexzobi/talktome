import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, LayoutAnimation } from 'react-native';

import Display from '../../components/UIKit/Display';
import styles from './styles';

type Props = {

}

type State = {
  username: String;
  password: String;
  passwordReenter: String;
  isSignUp: Boolean;
  passwordError: Boolean;
  passwordMatchError: Boolean;
  usernameError: Boolean;
}

class Login extends Component<Props, State> {

  state: State = {
    username: '',
    password: '',
    passwordReenter: '',
    passwordError: false,
    passwordMatchError: false,
    isSignUp: false,
    usernameError: false,
  }

  handleTextChange = (text, type) => {
    this.setState({ [type]: text });
  };

  switchLogin = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState(state => ({ isSignUp: !state.isSignUp }))
  };

  isValidPassword = password => {
    return password && password.length >= 8;
  }

  handleSubmit = () => {
    const { isSignUp, password, passwordReenter, username } = this.state;

    const passwordError = !this.isValidPassword(password);
    const passwordMatchError = isSignUp && password !== passwordReenter;
    const usernameError = !username;

    console.log('ALEXDEBUG: test', passwordError, passwordMatchError, usernameError)
    if (
      passwordError
      || passwordMatchError
      || usernameError
    ) {
      return this.setState({
        passwordError, passwordMatchError, usernameError
      });
    }
      // this.props.handleLogin(this.state);

    console.log('ALEXDEBUG: this.state', this.state)
  }

  render(){
    console.log('ALEXDEBUG: render', this.state)
    const { username, password, passwordReenter, isSignUp, passwordError, usernameError, passwordMatchError } = this.state;
    return (
      <View style={styles.Login}>
        <TextInput
          style={[
            styles.Input,
            usernameError && { borderColor: 'red' },
          ]}
          placeholder="Enter username"
          value={username}
          onChangeText={text => this.handleTextChange(text, 'username')}
        />
        <TextInput
          style={[
            styles.Input,
            passwordError || passwordMatchError && { borderColor: 'red' },
          ]}
          placeholder="Enter password"
          value={password}
          onChangeText={text => this.handleTextChange(text, 'password')}
        />
        <Display when={isSignUp}>
          <TextInput
            style={[
              styles.Input,
              passwordMatchError && { borderColor: 'red' },
            ]}
            placeholder="Re-enter password"
            value={passwordReenter}
            onChangeText={text => this.handleTextChange(text, 'passwordReenter')}
          />
        </Display>
        <TouchableOpacity
          style={styles.Button}
          onPress={this.handleSubmit}
        >
          <Text style={styles.Button_Text}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={this.switchLogin}
        >
          <Text style={styles.SignupText}>
          {
            isSignUp
              ? "Already have an account?"
              : "Don't have an account?"
          }
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
};

export default Login;