import { useState, useEffect } from 'react'
import React from 'react';
import { Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"


const Exercise = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  let animation = React.createRef();

  useEffect(() => {
      animation.current.play()
  }, [])


  const resetAnimation = () => {
    setIsPlaying(prev => !prev)
  
    if (isPlaying) {
        animation.current.reset();
    }
    else {
        animation.current.play()
    }
    
  }

  return (
        <View style={styles.animationContainer}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={30}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: true, delay: 2 })}
          >
        {({ remainingTime, color }) => (
          <Text style={{ color, fontSize: 40 }}>
            {remainingTime}
          </Text>
        )}
      </CountdownCircleTimer>
          <TouchableOpacity onPress={resetAnimation}>
              <LottieView
                  autoPlay={true}
                  ref={animation}
                  loop={true}
                  speed={0.5}
                  style={{
                      width: 600,
                      height: 300,
                      backgroundColor: '#fff',
                  }}
                  source={require('/Users/anindyasharma/Desktop/pland/pland-app/assets/exercise.json')}
              // OR find more Lottie files @ https://lottiefiles.com/featured
              // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
              />
          </TouchableOpacity>
        </View>
      );
}

export default Exercise

const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
  });