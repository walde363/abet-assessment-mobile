import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import styles from '../styles/styles';
import Assesmensts from './Assesments';
import DropDownPicker from 'react-native-dropdown-picker';

// Import API
import yelp from '../api/yelp';

const AssesmentList = ({ navigation, route }) => {

    // state for assessments
    const [assessments, setAssessments] = useState([]);

    // state for the modal -- filter button
    const [isModalVisible, setModalVisible] = useState(false);

    // array of outomes for filtering
    const [outcomes, setOutcomes] = useState([{ label: "-- All --", value: "ALL" }]);

    // filter by outcomes
    const [isOutcomeDisable, setOutcomeDisable] = useState(true);

    // selected department
    const [selectedDepartment, setDepartmentForAPI] = useState('');
    const [selectedOutcome, setOutcomeForAPI] = useState('');


    // getting assessments
    const fetchAssessments = async () => {

        try {
            const response = await yelp.get('/get/assessments', {});

            // console.log("API RESPONSE: ", response);

            setAssessments(response.data);
        } catch (error) {
            // TODO: send a message to the user
            console.log("Error: ", error);
        }
    }

    // filter the assessments by status
    const filterByStatus = (status) => {
        return assessments.filter(each => each.status === status);
    }


    // get a specific value from the assessment || outc_name, dept_name, name
    const getAttrFromAssessment = (attr, data, addDefault = true) => {

        // get only the values we're looking for
        let temp = data.map(each => each[attr]);

        // get unique values
        temp = temp.filter((value, index) => temp.indexOf(value) === index);


        // add the results to our new variable | array of object
        let results = [];

        // add default value
        (addDefault) ? results.push({ label: "-- All --", value: "ALL" }) : null;

        temp.forEach(val => {
            results.push({ label: val, value: val.replace(' ', '') });
        });

        return results;
    }


    const getOutcomeByDepartment = (label, value) => {

        // earling condition for active or not outcomes
        if (value === "ALL") {
            setOutcomeDisable(true);
            return;
        }

        // get all record with the dept_name the user choose
        let temp = assessments.filter(each => each["dep_name"] === label);

        // show outcomes if there is dept
        if (temp) setOutcomeDisable(false);

        // update outcomes
        setOutcomes(getAttrFromAssessment('outc_name', temp));
    }

    // get some assessments 
    const fetchAssessmentsWithAttr = async (dept, outcome = null) => {

        console.log(dept, outcome);
        if (!dept) return;

        try {
            const response = await yelp.get('/get/assessments', {});

            let temp = response.data.filter(each => each["dep_name"] === dept);

            if (outcome && outcome != '') {
                temp = temp.filter(each => each["outc_name"] === outcome)
            }

            setAssessments(temp);
        } catch (error) {
            // TODO: send a message to the user
            console.log("Error: ", error);
        }
    }


    // call only one time when rendered
    useEffect(() => {
        // get assessment data from the internet
        fetchAssessments();
    }, []);

    return (
        <View style={styles.AllOptionsConteiner}>

            <View style={styles.optionConteiner}>
                <Text style={styles.optionText}>{route.params?.title}</Text>

                <TouchableOpacity style={innerStyle.button} onPress={() => setModalVisible(true)}>
                    <Feather name='filter' style={innerStyle.iconStyle} />
                </TouchableOpacity>
            </View>

            <Modal transparent={true} visible={isModalVisible}>

                <View style={{
                    backgroundColor: "#000000aa", flex: 1, flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>

                    <View style={{ backgroundColor: "#ffffff", margin: 40, marginTop: 90, padding: 40, borderRadius: 10 }}>

                        <TouchableOpacity style={innerStyle.closeButtonModal} onPress={() => setModalVisible(false)}>
                            <AntDesign name='closecircleo' style={innerStyle.closeIconModal} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }} > Filter Assessments </Text>

                        {/* SELECT DEPARTMENT */}
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 5 }} > Choose Department</Text>
                            <DropDownPicker
                                items={getAttrFromAssessment('dep_name', assessments)}
                                defaultIndex={0}
                                containerStyle={{ height: 40 }}
                                arrowStyle={{ position: "absolute" }}
                                labelStyle={{ textAlign: 'left', flex: 1 }}
                                activeLabelStyle={{ color: 'gray' }}
                                onChangeItem={item => {
                                    getOutcomeByDepartment(item.label, item.value);
                                    setDepartmentForAPI(item.label);
                                }}
                            />
                        </View>

                        {/* SELECT OUTCOME */}
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 5 }} > Choose Outcome</Text>
                            <DropDownPicker
                                items={outcomes}
                                defaultIndex={0}
                                containerStyle={{ height: 40 }}
                                arrowStyle={{ position: "absolute" }}
                                labelStyle={{ textAlign: 'left', flex: 1 }}
                                activeLabelStyle={{ color: 'gray' }}
                                disabled={isOutcomeDisable}
                                onChangeItem={item => setOutcomeForAPI(item.label)}
                            />
                        </View>

                        <View style={styles.containerSubmit}>

                            <TouchableOpacity
                                style={innerStyle.submitBtn}
                                onPress={() => fetchAssessmentsWithAttr(selectedDepartment, selectedOutcome)}>

                                <Text style={{ textAlign: "center", color: 'white', fontWeight: 'bold' }}>Submit</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>
            </Modal>

            <Assesmensts
                data={filterByStatus(route.params?.status)}
                navigation={navigation}
            />

        </View>
    );

}

const innerStyle = StyleSheet.create({
    button: {
        alignItems: "center",
        flex: 1
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: "center",
        marginHorizontal: 15,
        color: 'white',
    },
    closeButtonModal: {
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    closeIconModal: {
        fontSize: 35,
        alignSelf: "center",
        paddingTop: 10,
        marginHorizontal: 15,
    },
    containerSubmit: {
    },
    submitBtn: {
        marginTop: 50,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#007bff',
    },
});

export default AssesmentList; 