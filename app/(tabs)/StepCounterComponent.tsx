import { StyleSheet} from 'react-native'
import React from 'react'
import {View, TextField, Text, Button} from 'react-native-ui-lib';

const StepCounterComponent = () => {
  return (
    <View  paddingH-15 paddingT-120>
    <Text blue50 text20>Welcome</Text>
    <TextField text50 placeholder="username" grey10/>
    <TextField text50 placeholder="password" secureTextEntry grey10/>
    <View marginT-100 center>
      <Button text70 white background-orange30 label="Login"/>
      <Button link text70 orange30 label="Sign Up" marginT-20/>
    </View>
  </View>
  )
}

export default StepCounterComponent

const styles = StyleSheet.create({})




// import React, { useEffect, useState } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";
// import { NativeModules } from "react-native";

// const { StepCounter } = NativeModules;

// const StepCounterComponent = () => {
//   const [steps, setSteps] = useState(0);

//   useEffect(() => {
//     // Start step counting on component mount
//     StepCounter.startStepCounting().catch((error) => console.error(error));

//     return () => {
//       // Stop step counting on component unmount
//       StepCounter.stopStepCounting().catch((error) => console.error(error));
//     };
//   }, []);

//   const getStepCount = () => {
//     StepCounter.getStepCount()
//       .then((stepCount) => {
//         console.log({stepCount});
//         setSteps(stepCount);
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Steps: {steps}</Text>
//       <Button title="Get Step Count" onPress={getStepCount} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

// export default StepCounterComponent;
