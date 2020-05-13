import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../styles/styles';
import ejemplo from './ejemplo';
import Assesmensts from './Assesments';
import statusDivide from './statusDivide';

// Import API
import yelp from '../api/yelp';

const AssesmentList = ({ navigation, route }) => {

    // state for assessments
    const [assessments, setAssessments] = useState([]);


    // getting assessments
    const fetchAssessments = async () => {

        try {
            const response = await yelp.get('/get/assessments', {});

            console.log("API RESPONSE: ", response);
            
            setAssessments(response.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    // call only one time when rendered
    useEffect( () => {
        fetchAssessments();
    }, []);

    return (
        <View style={styles.AllOptionsConteiner}>
            <View style={styles.optionConteiner}>
                <Text style={styles.optionText}>{route.params?.title}</Text>
            </View>
            <Assesmensts
                data={statusDivide(assessments, route.params?.status)}
                navigation={navigation} />
        </View>
    );
}

export default AssesmentList; 