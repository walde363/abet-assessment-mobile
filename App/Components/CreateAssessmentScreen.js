import React, { useEffect, useState } from 'react';
import { Text, BackHandler, Alert, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { getAssessmentAttr, transformData, getChildByParentID, createAssessment } from '../api/assessmentsRequest';

const CreateAssessmentScreen = ({ navigation, route }) => {

    // user email
    const userEmail = route.params.userEmail;

    const [isLoading, setLoading] = useState(true);

    // Assessment data
    const [name, setName] = useState('');
    const [section, setSection] = useState('');
    const [assessment, setAssessment] = useState([]);
    const [outcomes, setOutcomes] = useState([{ label: '-- Select Outcome --', value: '-1' }]);
    const [course, setCourse] = useState([{ label: '-- Select Course --', value: '-1' }]);
    const [rubric, setRubric] = useState([{ label: '-- Select Rubric --', value: '-1' }]);
    const [term, setTerm] = useState([{ label: '-- Select Term --', value: '-1' }]);
    const [studyProgram, setStudyProgram] = useState([]);

    // ID of the elemente selected
    const [stdID, setStudyID] = useState(-1);
    const [outcomeID, setOutcomeID] = useState(-1);
    const [courseID, setCourseID] = useState(-1);
    const [rubricID, setRubricID] = useState(-1);
    const [termID, setTermID] = useState(-1);


    // disable forms
    const [disableOutcome, setDisableOutcome] = useState(true);
    const [disableCourse, setDisableCourse] = useState(true);
    const [disableRubric, setDisableRubric] = useState(true);


    // if the users press the the back button
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to exit?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        // getting data for assessment create
        const request = getAssessmentAttr("/get/createAssessmentData");

        request.then(response => {

            setAssessment(response.data);

            setTerm([...term, ...transformData(response.data.terms, "term_name", "term_ID")]);

            // console.log(term);
            setLoading(false);
        });

        return () => backHandler.remove();
    }, []);

    const resetStates = () => {

        setName('');
        setSection('');
        setStudyProgram([
            { label: '-- Select Study Program --', value: -1 },
            ...transformData(assessment.studyPrograms, "prog_name", "prog_ID")
        ]);
        setOutcomes([{ label: '-- Select Outcome --', value: '-1' }]);
        setCourse([{ label: '-- Select Course --', value: '-1' }]);
        setRubric([{ label: '-- Select Rubric --', value: '-1' }]);
        setTerm([{ label: '-- Select Term --', value: '-1' }]);

        // ID of the elemente selected
        setStudyID(-1);
        setOutcomeID(-1);
        setCourseID(-1);
        setRubricID(-1);
        setTermID(-1);

        // disable forms
        setDisableOutcome(true);
        setDisableCourse(true);
        setDisableRubric(true);
    }

    // return is still is loading
    if (isLoading) return null;

    return (
        <View style={innerStyle.AllOptionsConteiner}>

            <View style={innerStyle.optionConteiner}>
                <Text style={innerStyle.optionText}>{route.params?.title}</Text>
            </View>



            <View style={{ marginBottom: 80, marginTop: 15, width: '100%', padding: 5 }}>
                <ScrollView>

                    {/* ASSESSMENT NAME */}
                    <View style={innerStyle.imputContainer}>
                        <Text style={innerStyle.label}> Assessment Name: </Text>
                        <TextInput placeholder="Name" style={innerStyle.input} value={name} onChangeText={(text) => setName(text)} />
                    </View>

                    {/* SECTION */}
                    <View style={innerStyle.imputContainer}>
                        <Text style={innerStyle.label}>Course Section: </Text>
                        <TextInput placeholder="Section" style={innerStyle.input} value={section} onChangeText={(text) => setSection(text)} />
                    </View>

                    {/* STUDY PROGRAM */}
                    <View style={innerStyle.imputContainer}>
                        <Text style={innerStyle.label}> Select Study Program: </Text>
                        <DropDownPicker
                            items={[
                                { label: '-- Select Study Program --', value: -1 },
                                ...transformData(assessment.studyPrograms, "prog_name", "prog_ID")
                            ]}
                            defaultIndex={0}
                            containerStyle={{ height: 40 }}
                            arrowStyle={{ position: "absolute" }}
                            labelStyle={{ textAlign: 'left', flex: 1 }}
                            activeLabelStyle={{ color: 'gray' }}
                            onChangeItem={item => {

                                // getting outcome by study program
                                const outc = (getChildByParentID(assessment.outcomes, item.value, "prog_ID"));

                                // getting coutse by study program
                                const cursos = getChildByParentID(assessment.courses, item.value, "prog_ID");

                                setOutcomes(transformData(outc, "outc_name", "outc_ID"));
                                setCourse(transformData(cursos, "course_name", "course_ID"));

                                // setting study program ID
                                setStudyID(item.value);

                                // Enable the options
                                setDisableOutcome(false);
                                setDisableCourse(false);

                            }}
                        />
                    </View>

                    {/* OUTCOME */}
                    <View style={innerStyle.imputContainer}>
                        <Text style={innerStyle.label}> Select Outcome: </Text>
                        <DropDownPicker
                            items={outcomes}
                            defaultIndex={0}
                            containerStyle={{ height: 40 }}
                            arrowStyle={{ position: "absolute" }}
                            labelStyle={{ textAlign: 'left', flex: 1 }}
                            activeLabelStyle={{ color: 'gray' }}
                            disabled={disableOutcome}
                            onChangeItem={item => {

                                // get rubric
                                const rubric = getChildByParentID(assessment.rubric, item.value, "outc_ID");

                                // set  the rubric data
                                setRubric(transformData(rubric, "rubric_name", "rubric_ID"))

                                // enable rubric
                                setDisableRubric(false);
                                setOutcomeID(item.value);
                            }}
                        />
                    </View>


                    {/* COURSE */}
                    <View style={innerStyle.imputContainer}>
                        <Text style={innerStyle.label}> Select Course: </Text>
                        <DropDownPicker
                            items={course}
                            defaultIndex={0}
                            containerStyle={{ height: 40 }}
                            arrowStyle={{ position: "absolute" }}
                            labelStyle={{ textAlign: 'left', flex: 1 }}
                            activeLabelStyle={{ color: 'gray' }}
                            disabled={disableCourse}
                            onChangeItem={item => {
                                setCourseID(item.value);
                            }}
                        />
                    </View>

                    {/* RUBRIC */}
                    <View style={innerStyle.imputContainer}>
                        <Text style={innerStyle.label}> Select Rubric: </Text>
                        <DropDownPicker
                            items={rubric}
                            defaultIndex={0}
                            containerStyle={{ height: 40 }}
                            arrowStyle={{ position: "absolute" }}
                            labelStyle={{ textAlign: 'left', flex: 1 }}
                            activeLabelStyle={{ color: 'gray' }}
                            disabled={disableRubric}
                            onChangeItem={item => {
                                setRubricID(item.value);
                            }}
                        />
                    </View>

                    {/* TERM */}
                    <View style={[innerStyle.imputContainer]}>
                        <Text style={innerStyle.label}> Academic Term: </Text>
                        <DropDownPicker
                            items={term}
                            defaultIndex={0}
                            containerStyle={{ height: 40 }}
                            dropDownMaxHeight={100}
                            arrowStyle={{ position: "absolute" }}
                            labelStyle={{ textAlign: 'left', flex: 1 }}
                            activeLabelStyle={{ color: 'gray' }}
                            onChangeItem={item => {
                                setTermID(item.value);
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        style={[innerStyle.button, innerStyle.createBtn, innerStyle.termBotton]}
                        onPress={async () => {
                            const [success, message] = await createAssessment({ name, section, stdID, outcomeID, courseID, rubricID, termID, userEmail });
                            if (!success) {
                                Alert.alert("Sorry!", message, [
                                    {
                                        text: "OK",
                                        onPress: () => null,
                                        style: "cancel"
                                    },
                                ]);
                            } else {
                                resetStates();
                                Alert.alert("Success!", message, [
                                    {
                                        text: "OK",
                                        onPress: () => {
                                            navigation.navigate('in Progress')
                                        },
                                        style: "cancel"
                                    },
                                ]);
                            }
                        }}>

                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Create Assessment</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}


const innerStyle = StyleSheet.create({
    button: {
        alignItems: "center",
        flex: 1
    },
    createBtn: {
        marginLeft: '10%',
        textAlign: 'center',
        backgroundColor: '#28a745',
        width: '80%',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: "center",
        marginHorizontal: 15,
        color: 'white',
    },
    AllOptionsConteiner: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    optionConteiner: {
        backgroundColor: 'green',
        width: '100%',
        height: '10%',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingLeft: 10,

    },
    optionText: {
        fontSize: 24,
        color: 'white',
        flex: 1,
        textAlign: 'center'
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'rgba(128,128,128, 0.2)',
        padding: 5,
        backgroundColor: 'white',
        color: 'gray',
        borderRadius: 5,
        // width: '100%'
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    imputContainer: {
        marginBottom: 15,
    },
    termBotton: {
        marginBottom: 100
    }
});

export default CreateAssessmentScreen; 