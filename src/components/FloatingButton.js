import React from 'react';
import { StyleSheet, Pressable} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const FloatingButton = ({click, children}) => {

  const {colors} = useTheme();

  return (
        <Pressable onPress={click} style= {[{ backgroundColor: colors.primary }, styles.btn ]}>
            {children}
        </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    padding: 16,
  },
});

export default FloatingButton;
