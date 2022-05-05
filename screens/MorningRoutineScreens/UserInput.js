import { StyleSheet, Text, View, Switch, Button, TextInput, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider';
import React from 'react'
import { useState } from 'react'
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"



const UserInput = ({navigation}) => {
  const [exercise, setExercise] = useState(0);
  const [creative, setCreative] = useState(0);
  const [energy, setEnergy] = useState(0)
  const [outdoors, setOutdoors] = useState(0)
  const [time, setTime] = useState(0)

  const makeRoutine = () => {
    const routine = ["Water"]

    if (exercise >= 4) { 
      routine.push("Exercise")
    } else if (exercise < 4 && exercise >= 2) {
      routine.push("Running")
    } 
    if (creative >= 4) {
      routine.push("Creative")
    } else if (creative < 4 && creative >= 2) {
      routine.push("Writing")
    } else { 
      routine.push("Reading")
    }
    if (energy <= 2) {
      routine.push("Coffee")
    } else if (energy > 2 && energy <= 4) {
      routine.push("Music")
    } else if (!routine.includes("Running")) {
      routine.push("Running")
    } else {
      routine.push("Music")
    }
    if (outdoors >= 3) {
      routine.push("Plants")
    } else if (!routine.includes("Running")) {
      routine.push("Running")
    }
    
    routine.push("Breakfast")
    routine.push("Todo")
    console.log(routine)
    navigation.navigate("Morning", {routine: routine})
  }

  return (
    <View>
      <View style={styles.slider}>
        <Text>How much do you want to exercise today?</Text>
        <Slider
          style={{width: 350, height: 40, padding:20}}
          step={1}
          minimumValue={0}
          maximumValue={5}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange	= {(exercise) => setExercise(exercise)}
          value={exercise}
        />
      </View>
      <View style={styles.slider}>
        <Text>Would you like to work on something creative?</Text>
        <Slider
          style={{width: 350, height: 40, padding:20}}
          step={1}
          minimumValue={0}
          maximumValue={5}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange	= {(creative) => setCreative(creative)}
          value={creative}
        />
      </View>
      <View style={styles.slider}>
        <Text>How energetic are you?</Text>
        <Slider
          style={{width: 350, height: 40}}
          step={1}
          minimumValue={0}
          maximumValue={5}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange	= {(energy) => setEnergy(energy)}
          value={energy}
        />
      </View>
      <View style={styles.slider}>
        <Text>How's the weather outside?</Text>
        <Slider
          style={{width: 350, height: 40}}
          step={1}
          minimumValue={0}
          maximumValue={5}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange	= {(outdoors) => setOutdoors(outdoors)}
          value={outdoors}
        />
      </View>
      <View style={styles.slider}>
        <Text>How much time do you approximately have in the morning? {time} minutes.</Text>
        <Text></Text>
        <Slider
          style={{width: 350, height: 40}}
          step={5}
          minimumValue={0}
          maximumValue={90}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange	= {(time) => setTime(time)}
          value={time}
        />
      </View>
        <TouchableOpacity
          onPress={makeRoutine}
          style={styles.submit}
        >
          <Text>Create </Text>
        </TouchableOpacity>
    </View>
  )
}

export default UserInput

const styles = StyleSheet.create({
  slider: {
    justifyContent:'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "lightblue",
    padding:30,
    borderRadius: 20, 
    alignItems: "flex-start",
    marginLeft: 10, 
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  submit: {
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "lightblue",
    height: 40,
    borderRadius: 20, 
    marginLeft: 10, 
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  }
})