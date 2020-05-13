import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PupopMenu from './PupopMenu';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/styles';

const AssesmentReport = ({ navigation, route }) => {
    var assesmentData = route.params?.data
    return (
        <View style={styles.AllOptionsConteiner}>
            <View style={styles.optionConteiner}>

                <Text style={styles.optionText}>{assesmentData.name}</Text>
            </View>

            <Text>{assesmentData.course}</Text>
            <Text>{assesmentData.rubric}</Text>
            <Text>{assesmentData.term}</Text>
            <Text>{assesmentData.status}</Text>
        </View>
    )
}

export default AssesmentReport; 