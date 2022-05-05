import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Routine from '../components/Routine'

const Dashboard = ({navigation}) => {
  return (
    <View>
      <Routine navigation={navigation} title="Morning Routine" location="MorningRoutineForm" />
      <Routine navigation={navigation} title="Journaling" location="Evening" /> 
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})