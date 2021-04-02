import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../contexts/ThemeContext';

const ChatInput = ({click}) => {
    const {colors} = useTheme();
    const [input, setInput] = useState('');

    const styles = StyleSheet.create({
        container: {
           display: 'flex',
           flexDirection: 'row',
           width: '100%',
           alignItems: 'center',
           padding: 20,
           paddingBottom: 10,
        },
        input_container:{
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            backgroundColor: colors.background_secondary,
            borderRadius: 10,
            alignItems: 'center',
            flex: 1,
        },
        input:{
            color: colors.primary_text,
            flex: 1,
        }
    });

    return (
        <View style={styles.container} >
            <View style={styles.input_container}>
                <MaterialCommunityIcons style={{marginRight: 10}} name="emoticon-happy" size={30} color={colors.primary} />
                <TextInput style={styles.input} placeholder='Type message...' placeholderTextColor ={colors.secondary_text} multiline={true} onChangeText={(text) => setInput(text)} defaultValue={input} />
            </View>
            <Ionicons style={{marginLeft: 10}} name="send" size={30} color={colors.primary} onPress={() => {
                if(input === '') return;
                click(prev => {
                    let message = {
                        id: `${prev.length + 1}`,
                        message: input,
                        time: '14:03',
                        sender: 2,
                    }
                    prev.unshift(message)
                    return [...prev];
                })

                setInput('');
            }}/>
        </View>
    )
}

export default ChatInput;