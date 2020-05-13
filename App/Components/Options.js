import React  from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AssesmentsMenu from './AssesmentsMenu';
import Acount from './Acount';

const Tab = createBottomTabNavigator();

const Options = ({ navigation, route }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Assessment in Progress'
                component={AssesmentsMenu}
                initialParams={{ title: 'Assessment in Progress', status: 'inProcess' }} />

            <Tab.Screen
                name='Assessment Complete'
                component={AssesmentsMenu}
                initialParams={{ title: 'Assessment Complete', status: 'complete' }} />

            <Tab.Screen
                name='Assessment Archive'
                component={AssesmentsMenu}
                initialParams={{ title: 'Assessment Archive', status: 'archive' }} />
        </Tab.Navigator>
    )
}

const Try = (navigator) => {
    return (
        <View>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
        </View>
    )
}
export default Options; 