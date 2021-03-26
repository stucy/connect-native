import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const Button = ({text, click}) => {

  const {colors} = useTheme();

  return (
        <Pressable onPress={click} style= {({ pressed }) => [
          {
            backgroundColor: pressed
              ? colors.primary
              : colors.primary_text,
          },
            styles.container
        ]}>
            {({ pressed }) => (
            <Text style= {[ { color: pressed ? colors.primary_text : colors.background}, styles.btn ]}>
                {text}
            </Text>
        )}
            
        </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    fontSize: 24,
    borderRadius: 15,
    padding: 12,
    width: '100%',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    borderRadius: 15,
  }
});

export default Button;
