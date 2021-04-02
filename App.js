import React from 'react';
import { TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';

import Navigator from './src/Navigator';
import { ThemeProvider } from './src/contexts/ThemeContext';

const App = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() } >
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </TouchableWithoutFeedback>
  );
}

export default App;