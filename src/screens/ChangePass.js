import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

import Button from '../components/Button';
import Input from '../components/Input';

const ChangePass = () => {
    const [error, setError] = useState(null);
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');
    const {colors} = useTheme();
    
    useEffect(() => {
        if (error) setError(null);

    }, [oldPass, newPass, confirmNewPass])

    const handleChangePass = () => {
        
        if(newPass != confirmNewPass) setError({confirmNewPass: 'New password don\'t match!'});

        if(oldPass != '123') setError({oldPass: 'Incorrect password!'});
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.background,
          padding: 25,
        },
        innerContainer: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center'
        },
        heading: {
            textAlign: 'center',
            fontSize: 28,
            color: colors.primary_text,
            marginBottom: 25
        },
        text: {
            color: colors.primary_text,
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 15
        },
        link: {
            color: colors.primary,
            textDecorationLine: 'underline',
        },
        error: {
            color: colors.error,
            paddingLeft: 5,
            marginBottom: 5
        }
    });

    return (
        <View style={styles.container}>

            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Change Password</Text>
                <Input placeholder="Old Password" password error={error?.oldPass} change={setOldPass}/>
                {error?.oldPass && <Text style={styles.error}>{error?.oldPass}</Text>}
                <Input placeholder="New Password" password change={setNewPass}/>
                <Input placeholder="Confirm New Password" password 
                        error={error?.confirmNewPass} change={setConfirmNewPass}/>
                {error?.confirmNewPass && <Text style={styles.error}>{error?.confirmNewPass}</Text>}
            </View>

            <Button text='Change' click={handleChangePass} />
        </View>
    );
}


export default ChangePass;