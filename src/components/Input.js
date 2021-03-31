import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useTheme } from '../contexts/ThemeContext';

const Input = ({placeholder, password, email, change, error}) => {
    const [hidden, setHidden] = useState(password);

    const {colors} = useTheme();

    const styles = StyleSheet.create({
        input: {
            borderColor: error ? colors.error : colors.primary,
            backgroundColor: colors.background_secondary,
            padding: 12,
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 15,
            marginBottom: 10,
            color: colors.primary_text
        },
        icon: {
            position: 'absolute',
            top: 15,
            right: 15,
        }
    });
    
    const handleVisible = () => {
        setHidden(prev => !prev);
    }

    return (
        <View>
            <TextInput  style={styles.input} placeholder={placeholder} autoCapitalize='none'
                        onChangeText={(text) => change(text)}
                        keyboardType={email ? 'email-address' : 'default'} 
                        placeholderTextColor ={colors.secondary_text} autoCompleteType='off' 
                        secureTextEntry={hidden} autoCompleteType='off' autoCorrect={false} 
            />
            
            {password && (<Pressable style={styles.icon} onPress={handleVisible}>
                <FontAwesome5 name={hidden ? 'eye-slash' : 'eye'} size={24} color={colors.secondary_text} />
            </Pressable>)}
            
        </View>
    );
}


export default Input;