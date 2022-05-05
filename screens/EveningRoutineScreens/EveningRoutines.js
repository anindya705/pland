import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';

import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import HTMLView from "react-native-htmlview";

const EditorScreen = ({navigation}) => {
  const strikethrough = require("/Users/anindyasharma/Desktop/pland/pland-app/assets/strikethrough.png"); //icon for strikethrough
  const video = require("/Users/anindyasharma/Desktop/pland/pland-app/assets/video.png"); //icon for Addvideo
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState("");

  const [isPlaying, setIsPlaying] = useState(false)

  const [currentDate, setCurrentDate] = useState('');
 
  useEffect(() => {
    animation.current.play()
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth()+1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    
    setCurrentDate(
      month + '/' + date + '/' + year 
    );
  }, []);

  let animation = React.createRef();



  const resetAnimation = () => {
    setIsPlaying(prev => !prev)
  
    if (isPlaying) {
        animation.current.reset();
    }
    else {
        animation.current.play()
    }
    
  }

  // this function will be called when the editor has been initialized
  function editorInitializedCallback() {
    RichText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        "Toolbar click, selected items (insert end callback):",
        items
      );
    });
  }

  // Callback after height change
  function handleHeightChange(height) {
    // console.log("editor height change:", height);
  }

  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
    );
  }

  function insertVideo() {
    // you can easily add videos from your gallery
    RichText.current?.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{currentDate}</Text>
      </View>
      <View style={styles.textContaine1}>
        <Text style={styles.text}>What's a goal you worked on today?</Text>
      </View>
      <RichEditor
        disabled={false}
        containerStyle={styles.editor}
        ref={RichText}
        style={styles.rich}
        placeholder={"Start Writing Here"}
        onChange={(text) => setArticle(text)}
        editorInitializedCallback={editorInitializedCallback}
        onHeightChange={handleHeightChange}
      />
      <RichToolbar
        style={[styles.richBar]}
        editor={RichText}
        disabled={false}
        iconTint={"black"}
        selectedIconTint={"gray"}
        disabledIconTint={"black"}
        onPressAddImage={onPressAddImage}
        iconSize={40}
        actions={[
          "insertVideo",
          ...defaultActions,
          actions.setStrikethrough,
          actions.heading1,
        ]}
        // map icons for self made actions
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
          ),
          [actions.setStrikethrough]: strikethrough,
          ["insertVideo"]: video,
        }}
        insertVideo={insertVideo}
      />
      <View style={styles.animationTest}onPress={resetAnimation}>
        <LottieView 
            autoPlay={true}
            ref={animation}
            loop={true}
            speed={0.5}
            style={{
                width: 400,
                height: 200,
                backgroundColor: '#fff',
            }}
            source={require('/Users/anindyasharma/Desktop/pland/pland-app/assets/writing.json')}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </View>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Home")
      }}
      style={styles.textContaine2}>
        <Text style={styles.text}>Save!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  /********************************/
  /* styles for html tags */
  a: {
    fontWeight: "bold",
    color: "black",
  },
  div: {
    fontFamily: "monospace",
  },
  p: {
    fontSize: 30,
  },
  /*******************************/
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    
  },
  editor: {
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
  },
  rich: {
    minHeight: 300,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  richBar: {
    height: 50,
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tib: {
    textAlign: "center",
    color: "#515156",
  },
  textContaine1: {
    backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingBottom: 20,
  },
  textContaine2: {
    backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingBottom: 20,
  },
  textContainer: {
    backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingBottom: 20,
      paddingTop: 20,

  },
  text: {
    fontFamily: "Cochin",
    fontSize: 20
  },
  animationTest: {
    alignItems: 'center',
      justifyContent: 'center',
  }
});