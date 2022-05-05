import { StyleSheet, Text, View, Button, TouchableOpacity, Switch } from 'react-native'
import { useState } from 'react'
import Task from '../../components/Task'
import React from 'react'

const MorningRoutines = ({route, navigation}) => {
  const routine = route.params.routine

  return (
    <View>
      {routine.map((e) => {
        return (
          <Task navigation={navigation} title={e} location={e} key={e}/>
        )
      })
      }
      <TouchableOpacity onPress={() => {
        navigation.navigate("Home")
      }}
      style={styles.textContainer}>
        <Text style={styles.text}>Complete!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MorningRoutines

const styles = StyleSheet.create({
  text: {
    fontFamily: "Cochin",
    fontSize: 20
  },
  textContainer: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  animationTest: {
    alignItems: 'center',
      justifyContent: 'center',
  }
});



