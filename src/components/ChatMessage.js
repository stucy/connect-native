import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

const ChatMessage = ({message, time, sender}) => {
    const {colors} = useTheme();
    sender = sender == 2;

    const styles = StyleSheet.create({
        container: {
           borderBottomLeftRadius: 10,
           borderBottomRightRadius: 10,
           margin: 15,
           marginBottom: 0,
           padding: 10,
           maxWidth: sender ? '70%' : '60%'
        },
        sent: {
            backgroundColor: colors.primary,
            borderTopLeftRadius: 10,
        },
        received: {
            backgroundColor: colors.background_secondary,
            borderTopRightRadius: 10
        },
        heading: {
          
        },
        message: {
            color: colors.primary_text,
            fontSize: 15
        },
        time: {
            color: colors.primary_text,
            opacity: .5,
            fontSize: 12
        },
        position: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: sender ? 'flex-end' : 'flex-start',
        },
        avatar: {
            width: 50,
            height: 50,
            marginTop: 10
        }
    });

    return (
        <View style={styles.position} >
            {!sender && <Image style={styles.avatar} source={require('../assets/default.png')}/>}
            <View style={[styles.container, sender ? styles.sent : styles.received]} >
                <Text style={styles.message} >{message}</Text>
                <Text style={styles.time} >{time}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;