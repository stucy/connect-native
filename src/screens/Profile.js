import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useTheme } from '../contexts/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Avatar from '../components/Avatar';
import IconButton from '../components/IconButton';

const Profile = ({navigation}) => {
    const [changeAvatar, setChangeAvatar ] = useState(true);
    const [animate, setAnimate] = useState(new Animated.Value(100));
    const [image, setImage] = useState(null);

    const {colors, icons} = useTheme();

    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            paddingTop: 50
        },
        heading: {
            textAlign: 'center',
            fontSize: 28,
            color: colors.primary_text,
            marginBottom: 10
        },
        secondary_heading: {
            color: colors.primary_text,
            fontSize: 20,
            paddingLeft: 25
        },
        icon:{
            borderRadius: 50,
            padding: 7,
            marginRight: 20,
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        change_avatar: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 10,
            position: 'absolute',
            bottom: 10,
            left: 25,
            right: 25,
            height: 90,
            backgroundColor: colors.inactive,
            borderRadius: 20,
        },
       ...icons
    });

    const toggleMenu = () => {
    
        let toValue = 100;
    
        if(changeAvatar) {
          toValue = 0;
        }
    
        //This will animate the transalteY of the subview between 0 & 100 depending on its current state
        //100 comes from the style below, which is the height of the subview.
        Animated.spring(
          animate,
          {
            toValue: toValue,
            velocity: 3,
            tension: 2,
            friction: 8,
            useNativeDriver: true
          }
        ).start();
    
        setChangeAvatar(prev => !prev);
      }

      const pickImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 1,
            });
        
            // console.log(result);
        
            if (!result.cancelled) {
                setImage(result.uri);
            }
      };

      const takeImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
    
        // console.log(result);
    
        if (!result.cancelled) {
            setImage(result.uri);
        }
      }

    return (
        <TouchableWithoutFeedback onPress={() => {
            if(!changeAvatar) toggleMenu();
        }}>

            <View style={styles.container} >
                <Avatar editable click={() => {
                    toggleMenu();
                }}/>
                <Text style={styles.heading} >Username</Text>
                <Text style={styles.secondary_heading}>Profile</Text>

                <IconButton text='Dark Mode' click={() => {}} toggle>
                    <View style={[styles.icon,styles.darkMode]}>
                        <Ionicons name="md-moon" size={24} color={colors.primary_text} />
                    </View>
                </IconButton>

                <IconButton text='Notifications' click={() => {}} toggle>
                    <View style={[styles.icon, styles.notification]}>
                        <Ionicons name="ios-notifications" size={24} color={colors.primary_text} />
                    </View>
                </IconButton>

                <IconButton text='Active Status' click={() => {}} toggle>
                    <View style={[styles.icon, styles.activeStatus]}>
                        <Ionicons name="chatbubble-ellipses-sharp" size={24} color={colors.primary_text} />
                    </View>
                </IconButton>

                <Text style={styles.secondary_heading}>Security</Text>
                
                <IconButton text='Change Password' click={()=> navigation.navigate('ChangePass')}>
                    <View style={[styles.icon, styles.changePass]}>
                        <Foundation name="lock" size={24} color={colors.primary_text} />
                    </View>
                </IconButton>

                <IconButton text='Logout' click={()=> navigation.navigate('Login')}>
                    <View style={[styles.icon, styles.logout]}>
                        <MaterialCommunityIcons name="location-exit" size={24} color={colors.primary_text} />
                    </View>
                </IconButton>

                <Animated.View style={[styles.change_avatar,
                    {transform: [{translateY: animate}]}]}>
                    <TouchableWithoutFeedback onPress={pickImage}>
                        <Entypo name="images" size={46} color={colors.primary} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={takeImage}>
                        <Entypo name="camera" size={46} color={colors.primary} />
                    </TouchableWithoutFeedback>
                </Animated.View>

            </View>

        </TouchableWithoutFeedback>
    )
}

export default Profile;