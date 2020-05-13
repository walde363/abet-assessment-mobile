import React from 'react';
import { View, Text, ImageBackground, ImageBackgroundBase } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';

const Welcome = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../Images/InterImaje.jpeg')} style={{ width: '100%', height: '100%', justifyContent: 'center'}}>

                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '45%', width: '100%', paddingTop:50, alignItems:'center', justifyContent:'center'}}>

                    <Text style={{ fontSize: 30 }}>Welcome to Inter</Text>
                    <Text style={{ fontSize: 30 }}>Assessment</Text>

                    <TouchableOpacity style={{backgroundColor: 'green', width: 300, height: '50%', alignSelf: 'center', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Log-in with your</Text>
                            <Text style={{ fontSize: 20, color: 'white' }}>University email</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

export default Welcome; 