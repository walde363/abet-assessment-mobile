import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';

const Welcome = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../Images/InterImaje.jpeg')} style={styles.welcomeBackgroundStyle}>

                <View style={styles.welcomeConteiner}>

                    <Text style={{ fontSize: 30 }}>Welcome to Inter</Text>
                    <Text style={{ fontSize: 30 }}>Assessment</Text>

                    <TouchableOpacity style={styles.loginButtonContainer} onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Log-in with your</Text>
                            <Text style={{ fontSize: 20, color: 'white' }}>University email</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

export default Welcome; 