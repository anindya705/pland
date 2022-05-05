import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native'
import React from 'react'

const Task = ({navigation, title, location}) => {

  const colorDict = {
    Todo: "#FFCE30",
    Water: "#7DD1EB",
    Reading: "#E389B9",
    Exercise: "#B565A7",
    Coffee: "#6f4e37",
    Exercise: "#28A745",
    Breakfast: "#FF7F7F",
    Creative: "#f2a125",
    Music: "#7DD1EB",
    Plants: "#98fb98",
    Running: "#B565A7",
    Writing: "#E389B9"      
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate(location)}>
      <View style={[styles.item, {backgroundColor: colorDict[location]}]}>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item: {
        padding:30,
        borderRadius: 20, 
        alignItems: "flex-start",
        marginLeft: 10, 
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    itemText: {
        maxWidth: "200%",
        fontSize: 20,
        fontWeight: "bold"
    },
})

export default Task

