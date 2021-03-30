import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

const Message = ({image, name, message, time, id, click}) => {
    // console.log({image, name, message, time});

    if(message.length > 70){
        message = `${message.slice(0, 70)}...`;
    }

    const {colors} = useTheme();

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10,
            position: 'relative'
        },
        image: {
            width: 50,
            height: 50,
            margin: 5,
            marginRight: 10
        },
        text_container: {
            flex: 1
        },
        name: {
            color: colors.primary_text,
            fontSize: 22
        },
        message: {
            color: colors.secondary_text,
        },
        time: {
            position: 'absolute',
            top: 5,
            right: 5,
            color: colors.secondary_text
        }
      });

    return (
        <TouchableOpacity onPress={click}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/default.png')} />
                <View style={styles.text_container}>
                    <Text style={styles.name} >{name}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <Text style={styles.time}>{time}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default Message;