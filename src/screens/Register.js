import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

import Button from '../components/Button';
import Input from '../components/Input';

const Register = () => {
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const {colors} = useTheme();
    
    useEffect(() => {
        if (error) setError(null);

    }, [username, email, pass, confirmPass])

    const handleRegister = () => {
        setError({
            email: 'Email taken!',
            username: 'Username taken!',
            password: 'Password too short!',
            passwordConfirm: 'Passwords do not match!'
        });
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
            marginBottom: 10
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

                <Text style={styles.heading}>Make an account</Text>

                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquid.
                </Text>

                <Input placeholder="Email address" email error={error?.email} change={setEmail}/>
                {error?.email && <Text style={styles.error}>{error?.email}</Text>}

                <Input placeholder="Username" error={error?.username} change={setUsername}/>
                {error?.username && <Text style={styles.error}>{error?.username}</Text>}

                <Input placeholder="Password" password error={error?.password} change={setPass} />
                {error?.password && <Text style={styles.error}>{error?.password}</Text>}

                <Input placeholder="Confirm Password" password 
                        error={error?.passwordConfirm} change={setConfirmPass}/>
                {error?.passwordConfirm && <Text style={styles.error}>{error?.passwordConfirm}</Text>}

            </View>

            <Button text='Register' click={handleRegister}/>
        </View>
    );
}


export default Register;