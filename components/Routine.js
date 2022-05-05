import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Routine = ({navigation, title, location}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(location)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#F7B2BD", 
        padding:60,
        borderRadius: 20, 
        alignItems: "center",
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

export default Routine

