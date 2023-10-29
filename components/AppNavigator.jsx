// AppNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SchoolCard } from './SchoolCard';
import StudentList from './StudentList';
import StudentDetailsWFirestore from './StudentDetailsWFirestore';
import AddStudentDetails from './AddStudentDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StudentStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="StudentList" component={StudentList} />
                {/* <Stack.Screen name="StudentDetails" component={StudentDetails} /> */}
                <Stack.Screen name="StudentDetails" component={StudentDetailsWFirestore} />
            </Stack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="SchoolCard" component={SchoolCard} />
                <Tab.Screen name="Student Stack" component={StudentStack} />
                <Tab.Screen name="Add Student" component={AddStudentDetails} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

  
export default AppNavigator;
