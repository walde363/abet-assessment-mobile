import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AssesmentList from './AssesmentList';
import AssesmentReport from './AssesmentReport';

const Stack = createStackNavigator();

const AssesmentsMenu = ({ navigation, route }) => {

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
                    name="AssesmentReport"
                    component={AssesmentReport}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AssesmentsMenu; 