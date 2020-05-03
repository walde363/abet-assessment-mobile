import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/styles';

const Acount = ({ navigation, route }) => {
    const user = route.params?.user;
    return (
        <View style={styles.AllOptionsConteiner}>
            <View style={styles.optionConteiner}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="arrow-left" size={40} color={'white'} />
                </TouchableOpacity>

                <View style={{ marginRight: 100, marginLeft: 50 }}>
                    <Text style={styles.optionText}>Acount</Text>
                </View>

            </View>
            <Text>Name</Text>
            <Text>{user.givenName}</Text>
            <Text>Last Name</Text>
            <Text>{user.surname}</Text>
            <Text>Email</Text>
            <Text>{user.mail}</Text>
            <Text>Job title</Text>
            <Text>{user.jobTitle}</Text>
        </View>
    )
}

export default Acount; 
