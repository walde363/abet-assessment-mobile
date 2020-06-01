import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BackHandler, Alert } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import AssesmentList from './AssesmentList';
import AssesmentReport from './AssesmentReport';

const Stack = createStackNavigator();

const AssesmentsMenu = ({ navigation, route }) => {

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

        return () => backHandler.remove();
    }, []);


    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator headerMode="none" initialRouteName="Assesment">
                <Stack.Screen
                    name="Assesment"
                    component={AssesmentList}
                    initialParams={{ title: route.params?.title, status: route.params?.status }}
                    options={{
                        headerStyle: { backgroundColor: '#f4511e' }
                    }}
                />
                <Stack.Screen
                    initialParams={{ title: route.params?.title, status: route.params?.status, userEmail: route.params?.userEmail}}
                    name="AssesmentReport"
                    component={AssesmentReport}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AssesmentsMenu; 