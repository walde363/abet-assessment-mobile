import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';

const Welcome = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <View style={styles.WelcomeConteiner}>
                    <Image source={require('../Images/intershield.png')} />

                    <View style={styles.logoContiainer}>
                        <Text>Welcome to</Text>
                        <Text style={{ fontSize: 50, color:'white'}}> Assesment ABET</Text>
                        <Text style={{ fontSize: 50, color:'white'}}>Mobile</Text>
                    </View>
                    <Image source={require('../Images/interlogo.png')} />

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Welcome; 