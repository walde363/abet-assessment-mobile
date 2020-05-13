import React  from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import AssesmentsMenu from './AssesmentsMenu';

const Tab = createBottomTabNavigator();

const Options = ({ navigation, route }) => {

    const userEmail = route.params.user.userPrincipalName;

    console.log("User Email: ", userEmail);

    return (
        <Tab.Navigator 
        tabBarOptions={{
            activeBackgroundColor:'darkgreen', 
            activeTintColor:'white',
            inactiveBackgroundColor:'green' 
        }}>
            <Tab.Screen
                name='Assessment in Progress'
                component={AssesmentsMenu}
                initialParams={{ title: 'Assessment in Progress', status: 'inProcess' }} 
                options={{
                    tabBarIcon: () => (
                      <Entypo
                      name='pencil'
                      size={30}
                      color={'white'}/>
                    )
                  }}/>

            <Tab.Screen
                name='Assessment Complete'
                component={AssesmentsMenu}
                initialParams={{ title: 'Assessment Complete', status: 'complete' }} 
                options={{
                    tabBarIcon: () => (
                      <Entypo
                      name='check'
                      size={30}
                      color={'white'}/>
                    )
                  }}/>

            <Tab.Screen
                name='Assessment Archive'
                component={AssesmentsMenu}
                initialParams={{ title: 'Assessment Archive', status: 'archive' }} 
                options={{
                    tabBarIcon: () => (
                      <Entypo
                      name='folder'
                      size={30}
                      color={'white'}/>
                    )
                  }}/>
        </Tab.Navigator>
    )
}

export default Options; 