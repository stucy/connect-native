import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Animated from 'react-native-reanimated';

import Friend from '../components/Friend';
import FloatingButton from '../components/FloatingButton';

import { useTheme } from '../contexts/ThemeContext';

import { FontAwesome5 } from '@expo/vector-icons';

const FriendsList = ({navigation}) => {
    const [friends, setFriends] = useState([
        {id: '1', image: '', name: 'Стоян Г.'},
        {id: '2', image: '', name: 'Ники П.'},
        {id: '3', image: '', name: 'Стоян Г.'},
        {id: '4', image: '', name: 'Ники П.'},
        {id: '5', image: '', name: 'Стоян Г.'},
        {id: '6', image: '', name: 'Ники П.'},
        {id: '7', image: '', name: 'Стоян Г.'},
        {id: '8', image: '', name: 'Ники П.'},
        {id: '9', image: '', name: 'Стоян Г.'},
        {id: '10', image: '', name: 'Ники П.'},
        {id: '11', image: '', name: 'Стоян Г.'},
        {id: '12', image: '', name: 'Ники П.'},
    ]);

    const animateY = new Animated.Value(0);

    const {colors} = useTheme();

    const HEADER_HIGHT = 150;
    const headerY = Animated.interpolate(animateY,
        {inputRange:[0, HEADER_HIGHT], outputRange: [0, -HEADER_HIGHT]})

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            backgroundColor: colors.primary,
        },
        heading: {
            fontSize: 28,
            color: colors.primary_text,
        },
        heading_container: {
            display: 'flex',
            height: HEADER_HIGHT ,
            justifyContent: 'center',
            alignItems: 'center'
        },
        avatar: {
            position: 'absolute',
            width: 35,
            height: 35,
            top: 20,
            right: 20
        },
        chats_container: {
            height: '100%',
            // flex: 1,
            backgroundColor: colors.background,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 10,
            paddingTop: 30,
        },
        floating_btn:{
            position: 'absolute',
            bottom: 20,
            right: 10
        }
    });

    const renderFriends = (item) => <Friend {...item} key={item.id} click={() => navigation.navigate('Chat')}/>;

    return (

        <View style={styles.container} >
            
            <Animated.ScrollView
                contentContainerStyle={{flexGrow: 1}}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event([ { nativeEvent: { contentOffset: { y: animateY } } } ])}>

                <Animated.View style={[styles.heading_container, {transform:[{translateY: headerY + 50}]}]}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                        <Image style={styles.avatar} source={require('../assets/default.png')} />
                    </TouchableWithoutFeedback>
                    <Text style={styles.heading} >Friends</Text>
                </Animated.View>
                <View style={styles.chats_container}>
                    {friends.map(el => renderFriends(el))}
                </View>
            </Animated.ScrollView>
            <View style={styles.floating_btn} >
                <FloatingButton click={() => navigation.navigate('SearchFriends', {add: true})}>
                    <FontAwesome5 name="user-plus" size={24} color={colors.primary_text} />
                </FloatingButton>
            </View>
        </View>
    )
}

export default FriendsList;