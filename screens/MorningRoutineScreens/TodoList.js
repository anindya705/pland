import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import TodoItem from '../../components/TodoItem';
import { firebase } from '../../firebase';

export default function TodoList() {
  const [task, setTask] = useState("")
  const [allTasks, setAllTasks] = useState([])

  const taskRef = firebase.firestore().collection("tasks")
  

  const handleAddTask = () => {
    setTask(null)
    setAllTasks([...allTasks, task])
    Keyboard.dismiss()
    // if (task && task.length > 0) {
    //   const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    //   const data = {
    //     text: task,
    //     createdAt: timestamp,
    //   };

    //   taskRef
    //     .add(data)
    //     .then(_doc => {
    //       setTask(null)
    //       setAllTasks([...allTasks, task])
    //       Keyboard.dismiss()
    //     })
    //     .catch((error) => {
    //       alert(error)
    //     })
    // }
  }

  const completeTask = (index) => {
    const itemsCopy = [...allTasks]
    itemsCopy.splice(index, 1)
    setAllTasks(itemsCopy)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {
            allTasks.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <TodoItem text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputArea}>
        <TextInput style={styles.writeTask} placeholder="Write a task" value = {task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30
  },
  inputArea: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  writeTask: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1
  }, 
  addWrapper: {
    height: 60, 
    width: 60,
    borderRadius: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1
  }
});
