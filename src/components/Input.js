import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Input = ({placeholder, password, email}) => {
    const [hidden, setHidden] = useState(password);
    const handleVisible = () => {
        setHidden(prev => !prev);
    }

    return (
        <View>
            <TextInput  style={styles.input} placeholder={placeholder} 
                        keyboardType={email ? 'email-address' : 'default'} 
                        placeholderTextColor ='#8E8E8E' autoCompleteType='off' 
                        secureTextEntry={hidden} autoCompleteType='off' autoCorrect={false} 
            />
            
            {password && (<Pressable style={styles.icon} onPress={handleVisible}>
                <FontAwesome5 name={hidden ? 'eye-slash' : 'eye'} size={24} color="#8E8E8E"/>
            </Pressable>)}
            
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#3CAC68',
        padding: 12,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 10,
        color: '#EFEFEF'
    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 15,
    }
});

export default Input;