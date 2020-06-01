import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

// component of assessment list
import AssesmentsMenu from './AssesmentsMenu';

// create assessment Screen
import CreateAssessmentScreen from './CreateAssessmentScreen';

const Tab = createBottomTabNavigator();

const Options = ({ navigation, route }) => {

  const userEmail = route.params.user.userPrincipalName;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'rgba(0, 99, 102, 0.8)',
        activeTintColor: 'white',
        inactiveBackgroundColor: '#006266',
        labelStyle: { fontWeight: 'bold', fontSize: 12, color: 'white' }
      }}>
      <Tab.Screen
        name='in Progress'
        component={AssesmentsMenu}
        initialParams={{ title: 'Assessment in Progress', userEmail, status: 'in_progress', loadAgain: false }}
        options={{
          tabBarIcon: () => (
            <Entypo
              name='pencil'
              size={30}
              color={'white'} />
          )
        }} />

      <Tab.Screen
        name='Completed'
        component={AssesmentsMenu}
        initialParams={{ title: 'Assessment Complete', userEmail, status: 'completed', loadAgain: false }}
        options={{
          tabBarIcon: () => (
            <Entypo
              name='check'
              size={30}
              color={'white'} />
          )
        }} />

      <Tab.Screen
        name='Archived'
        component={AssesmentsMenu}
        initialParams={{ title: 'Assessment Archived', userEmail, status: 'archive', loadAgain: false }}
        options={{
          tabBarIcon: () => (
            <Entypo
              name='folder'
              size={30}
              color={'white'} />
          )
        }} />

      <Tab.Screen
        name='ADD'
        component={CreateAssessmentScreen}
        initialParams={{ title: 'Create New Assessment', userEmail, loadAgain: false }}
        options={{
          tabBarIcon: () => (
            <Entypo
              name='plus'
              size={30}
              color={'white'} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default Options; 