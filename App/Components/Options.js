import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, TouchableOpacityBase } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import AssesmentsMenu from './AssesmentsMenu';
import Acount from './Acount'; 

const Drawer = createDrawerNavigator();

const Options = ({ navigation, route }) => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator drawerType="slide"
                drawerContentOptions={{
                    activeBackgroundColor: 'green',
                    activeTintColor: 'white',
                    inactiveTintColor: 'green'
                }}
                drawerContent={DrawerContent}>
                <Drawer.Screen
                    name="Assesment in progress"
                    component={AssesmentsMenu}
                    initialParams={{ title: 'Assesment in Progress', status: 'inProcess' }} />
                <Drawer.Screen
                    name="Assesment Complete"
                    component={AssesmentsMenu}
                    initialParams={{ title: 'Assesment Complete', status: 'complete' }} />
                <Drawer.Screen
                    name="Assesment Archive"
                    component={AssesmentsMenu}
                    initialParams={{ title: 'Assesment Archive', status: 'archive' }} />
                <Drawer.Screen
                    name={route.params?.user.mail}
                    component={Acount}
                    initialParams={{ user: route.params?.user }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

function DrawerContent({ navigation, state, route }){
    const routes = state.routes
    return (
        <View style={{ paddingTop: 50, backgroundColor: 'green', height: '100%' , alignItems:'center'}}>
            
            <View style={{backgroundColor:'white', width:'30%', height:'12%', alignItems:'center', justifyContent:'center', borderRadius:50}}>
                <TouchableOpacity onPress={() => navigation.navigate(routes[3].name)}>
    <Text style={{ fontSize: 50, color: 'black' }}>{routes[3].name[0]}{routes[3].name[1]}</Text>
            </TouchableOpacity>
            </View>
            

            <View style={{ height: '25%', justifyContent: 'space-around', marginTop:50, marginBottom:325}}>

                <TouchableOpacity onPress={() => navigation.navigate(routes[0].name)} style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'green', height:50, width:'95%', borderRadius:10, padding:5}}>
                        <Text style={{ fontSize: 25, color: 'white' }}>{routes[0].name}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate(routes[1].name)} style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'green', height:50, width:'95%', borderRadius:10, padding:5}}>
                        <Text style={{ fontSize: 25, color: 'white' }}>{routes[1].name}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate(routes[2].name)} style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'green', height:50, width:'95%', borderRadius:10, padding:5}}>
                        <Text style={{ fontSize: 25, color: 'white' }}>{routes[2].name}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={{ fontSize: 25, color: 'white' }}>Log-Out</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Options; 