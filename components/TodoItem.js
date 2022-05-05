import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TodoItem = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.squarebutton}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity style={styles.roundbutton}></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white", 
        padding: 15,
        borderRadius: 10, 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap : "wrap"
    },
    squarebutton: {
        backgroundColor: "pink",
        width: 24,
        height: 24,
        opacity: 0.4, 
        borderRadius: 2,
        marginRight: 10,
    }, 
    itemText: {
        maxWidth: "80%"
    },
    roundbutton: {
        height: 13, 
        width: 13,
        borderColor: "pink", 
        borderWidth: 2, 
        borderRadius: 5,
    }
})


export default TodoItem
