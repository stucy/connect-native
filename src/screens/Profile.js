import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Avatar from '../components/Avatar';
import IconButton from '../components/IconButton';

const Profile = ({navigation}) => {
    const {colors, icons} = useTheme();

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
       ...icons
    });

    // const logoutIcon = ;

    return (
        <View style={styles.container} >
            <Avatar editable/>
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

        </View>
    )
}

export default Profile;