import {
  ImageBackground,
  StyleSheet,
  View,
  Vibration,
  Image,Text,
  Pressable,
} from "react-native";
import React, { useState, useRef } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import AppSafeView from "@/components/utils/AppSafeView";

import { COLORS } from "@/constants/AppColors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { resFontSize, screenHeight } from "@/constants/Sizes";

const Commit = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const handlePressIn = () => {
    Vibration.vibrate();
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1; // Adjust increment as needed
        if (newProgress >= 100) {
          clearInterval(intervalRef.current);
          setIsComplete(true);
          return 100;
        }
        return newProgress;
      });
    }, 30); // Adjust the interval duration as needed
  };

  const handlePressOut = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <AppSafeView style={styles.safeView}>
      <ThemedView
        style={{
          height: screenHeight("45%"),
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.background1,
        }}
      >
        <View style={{width:'80%',alignItems:'center'}}>
        <Text style={{color:COLORS.white,fontSize:22,fontWeight:'600'}} >
          I commit to
        </Text>
        <Text
          style={{color:COLORS.white,fontSize:18,letterSpacing:1}}
        >
          learning to manage my condition, sticking to my treatment plan, to
        </Text>
        <Text  style={{color:COLORS.white,fontSize:18,letterSpacing:1}}
        >
          improving my health
        </Text>
        </View>
        <ThemedView
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: COLORS.background1,
            paddingHorizontal: 62,
            marginVertical: 25,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.smallImage}
              source={require("../assets/images/sleep.png")}
            />
            <Text style={{color:COLORS.white}}>Better Sleep</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.smallImage}
              source={require("../assets/images/travel.png")}
            />
            <ThemedText lightColor={COLORS.white}> Travel</ThemedText>
          </View>
        </ThemedView>
      </ThemedView>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handlePressIn}
      >
        <View
          style={[
            styles.container,
            { backgroundColor: isComplete ? "#47CD89" : COLORS.background1 },
          ]}
        >
          <ImageBackground
            style={[styles.imageBackground]}
            source={
              isComplete
                ? require("../assets/images/fingerprintComplete.png")
                : require("../assets/images/fingerprint.png")
            }
          />
          <AnimatedCircularProgress
            size={130}
            width={6}
            fill={progress}
            tintColor={COLORS.circularRing}
            backgroundColor={isComplete ? COLORS.circularRing : "#3d5875"}
            style={styles.circularProgress}
          />
        </View>
      </Pressable>
      <ThemedText lightColor={COLORS.white}>Press and hold to commit.</ThemedText>
    </AppSafeView>
  );
};

export default Commit;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background1,
  },
  container: {
    position: "relative",
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75,
    marginBottom: 50,
  },
  imageBackground: {
    width: 65,
    height: 65,
    position: "absolute",
  },
  circularProgress: {
    position: "absolute",
  },
  smallImage: { width: 100, height: 100, resizeMode: "contain" },
});
