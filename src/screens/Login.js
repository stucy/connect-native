import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

import Button from '../components/Button';
import Input from '../components/Input';

const Login = ({ navigation }) => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {colors} = useTheme();

    useEffect(() => {
        if (error) setError(null);

    }, [email, pass])

    // event handlers

    const handleLogin = async () => {

        // console.log({email, pass});

        if(pass == '') navigation.navigate('ChatsList');

        setError({login: 'Incorrect email or password!'});
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
            marginBottom: 15,
            marginTop: 25
        },
        link: {
            color: colors.primary,
            textDecorationLine: 'underline',
            fontSize: 16,
        },
        error: {
            color: colors.error,
            textAlign: 'center',
            marginBottom: 5
        }
    });

    return (
        <View style={styles.container}>
            
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Let's sign you in.</Text>

                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquid.
                </Text>
                <Text style={styles.error}>{error?.login}</Text>
                <Input placeholder="Email address" email change={setEmail} error={error?.login} />
                <Input placeholder="Password" password change={setPass} error={error?.login}/>
            </View>

            <View>
                <Text style={styles.text}>
                    Don't have an account? 
                    <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Register!</Text>
                </Text>

                <Button text='Sign in' click={handleLogin}/>
            </View>
        </View>
    );

}


export default Login;