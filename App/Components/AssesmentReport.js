import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/styles';

const AssesmentReport = ({ navigation, route }) => {

    const assesmentData = route.params?.data;

    return (
        <View style={styles.AllOptionsConteiner}>


            <View style={styles.optionConteiner}>
                <TouchableOpacity style={{ padding: 5, paddingBottom: 0 }} onPress={() => navigation.pop()}>
                    <Ionicons name='md-arrow-round-back' size={30} color="white" />
                </TouchableOpacity>
            </View>

            <View style={{ width: '96%', marginBottom: 20, marginTop: 15 }}>
                <Text style={{ textAlign: "center", fontSize: 24, fontWeight: 'bold' }}> Details for</Text>
                <Text style={{ textAlign: "center", fontSize: 20, fontStyle: 'italic' }}>{assesmentData.name}</Text>
            </View>

            <View style={{ flex: 1, width: '100%', marginTop: 5 }}>

                <View style={[innerStyles.row, innerStyles.borderTop]}>
                    <Text style={innerStyles.columnLabel}>Professor: </Text>

                    <Text style={innerStyles.columnInformation}>{assesmentData.first_name} {assesmentData.last_name}</Text>
                </View>

                <View style={[innerStyles.row, innerStyles.bgOdd]}>
                    <Text style={innerStyles.columnLabel}>Course: </Text>

                    <Text style={innerStyles.columnInformation}>{assesmentData.course_name} - {assesmentData.course_number}</Text>
                </View>


                <View style={innerStyles.row}>
                    <Text style={innerStyles.columnLabel}>Course Section: </Text>

                    <Text style={innerStyles.columnInformation}>{assesmentData.course_section}</Text>
                </View>

                <View style={[innerStyles.row, innerStyles.bgOdd]}>
                    <Text style={innerStyles.columnLabel}>Outcome: </Text>

                    <Text style={innerStyles.columnInformation}>{assesmentData.outc_name} from {assesmentData.prog_name}</Text>
                </View>


                <View style={innerStyles.row}>
                    <Text style={innerStyles.columnLabel}>Rubric: </Text>

                    <Text style={innerStyles.columnInformation}>{assesmentData.rubric_name}</Text>
                </View>

                <View style={[innerStyles.row, innerStyles.bgOdd]}>
                    <Text style={innerStyles.columnLabel}>Department: </Text>

                    <Text style={innerStyles.columnInformation}>{assesmentData.dep_name}</Text>
                </View>

                <View style={innerStyles.row}>

                    <Text style={innerStyles.columnLabel}>Term: </Text>

                    <Text style={innerStyles.columnInformation}>{assesmentData.term_name}</Text>
                </View>


                <View style={[innerStyles.row, innerStyles.bgOdd]}>
                    <Text style={innerStyles.columnLabel}>Status: </Text>

                    <Text style={innerStyles.columnInformation}>{assesmentData.status}</Text>
                </View>

            </View>
        </View>
    );
};

const innerStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: '100%',
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        height: 60,
    },
    columnLabel: {
        width: '30%',
        fontSize: 16,
        fontWeight: "bold",
        // borderRightWidth: 1,
        borderColor: 'gray',
        textAlignVertical: 'center',
    },
    columnInformation: {
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '70%'
    },
    borderTop: {
        borderTopWidth: 1
    },
    bgOdd: {
        backgroundColor: 'rgba(210, 215, 211,0.5)'
    }
});

export default AssesmentReport; 