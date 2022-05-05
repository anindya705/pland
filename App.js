import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Task from './components/Task';
import { firebase } from './firebase.js';
import TodoList from './screens/MorningRoutineScreens/TodoList';
import Dashboard from './screens/Dashboard';
import MorningRoutines from './screens/MorningRoutineScreens/MorningRoutines';
import EveningRoutines from './screens/EveningRoutineScreens/EveningRoutines';
import UserInput from './screens/MorningRoutineScreens/UserInput';
import WaterTask from './screens/MorningRoutineScreens/WaterTask';
import Reading from './screens/MorningRoutineScreens/Reading'
import Coffee from './screens/MorningRoutineScreens/Coffee'
import Exercise from './screens/MorningRoutineScreens/Exercise';
import Breakfast from './screens/MorningRoutineScreens/Breakfast';
import Creative from './screens/MorningRoutineScreens/Creative';
import Music from './screens/MorningRoutineScreens/Music';
import Plants from './screens/MorningRoutineScreens/Plants';
import Running from './screens/MorningRoutineScreens/Running';
import Writing from './screens/MorningRoutineScreens/Writing';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    //   <Text>hahah testing</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Home" component={Dashboard} options={{title: 'Welcome'}}></Stack.Screen>
        <Stack.Screen name="Morning" component={MorningRoutines} options={{title: "Let's get you started"}}></Stack.Screen>
        <Stack.Screen name="Todo" component={TodoList} options={{title: 'Todo'}}></Stack.Screen>
        <Stack.Screen name="Evening" component={EveningRoutines}></Stack.Screen>
        <Stack.Screen name="MorningRoutineForm" component={UserInput}></Stack.Screen>
        <Stack.Screen name="Water" component={WaterTask}></Stack.Screen>
        <Stack.Screen name="Reading" component={Reading}></Stack.Screen>
        <Stack.Screen name="Coffee" component={Coffee}></Stack.Screen>
        <Stack.Screen name="Exercise" component={Exercise}></Stack.Screen>
        <Stack.Screen name="Breakfast" component={Breakfast}></Stack.Screen>
        <Stack.Screen name="Creative" component={Creative}></Stack.Screen>
        <Stack.Screen name="Music" component={Music}></Stack.Screen>
        <Stack.Screen name="Plants" component={Plants}></Stack.Screen>
        <Stack.Screen name="Running" component={Running}></Stack.Screen>
        <Stack.Screen name="Writing" component={Writing}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

