import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

import { FontAwesome5 } from '@expo/vector-icons';

const Friend = ({image, name, click, add}) => {

    const {colors} = useTheme();

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
            position: 'relative'
        },
        container_main:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        image: {
            width: 60,
            height: 60,
            margin: 5,
            marginRight: 15
        },
        name: {
            color: colors.primary_text,
            fontSize: 24
        },
      });

    return (
        <View style={styles.container_main} >
            <TouchableOpacity onPress={click}>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../assets/default.png')} />
                    <Text style={styles.name} >{name}</Text>
                </View>
            </TouchableOpacity>
            {add && <FontAwesome5 name="user-plus" size={24} color={colors.secondary_text} onPress={add}/>}
        </View>
        

    )
}

export default Friend;