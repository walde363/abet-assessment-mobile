import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../styles/styles';
import ejemplo from './ejemplo';
import Assesmensts from './Assesments'; 
import statusDivide from './statusDivide'; 

const AssesmentList = ({navigation, route}) => {
    return(
    <View style={styles.AllOptionsConteiner}>
            <View style={styles.optionConteiner}>
                <Text style={styles.optionText}>{route.params?.title}</Text>
            </View>
            <Assesmensts
            data={statusDivide(ejemplo, route.params?.status)}
            navigation={navigation}/>
        </View>
        )
}

export default AssesmentList; 