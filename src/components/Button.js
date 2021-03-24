import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

const Button = ({text}) => {
  return (
    <View>
        <Pressable style= {({ pressed }) => [
          {
            backgroundColor: pressed
              ? '#3CAC68'
              : '#DBDADA',
            color: pressed ? '' : '#545454'
          },
            styles.container
        ]}>
            {({ pressed }) => (
            <Text style= {[ { color: pressed ? '#EFEFEF' : '#545454'}, styles.btn ]}>
                {text}
            </Text>
        )}
            
        </Pressable>
    </View>
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
