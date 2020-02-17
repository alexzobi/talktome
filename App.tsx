/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import NetInfoMonitor from './src/components/NetInfoMonitor/NetInfoMonitor';
import Conversation from './src/pages/Conversation/Conversation';
import { store, persistor } from './src/store/store';

const Stack = createStackNavigator();

const App = () => {
  // NOTE: PersistGate.props.loading can be a react element to display when store is loading.

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Conversation} />
          </Stack.Navigator>
        </NavigationContainer>
        <NetInfoMonitor />
      </PersistGate>
    </Provider>
  );
};

export default App;
