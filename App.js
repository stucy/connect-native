import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Navigator from './src/Navigator';

const App = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() } >
        <Navigator />
    </TouchableWithoutFeedback>
  );
}

export default App;