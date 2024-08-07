import React, { useEffect, useState } from 'react';
import { View, Button, Linking, StyleSheet, Alert, Text } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: '1029736652724-uaeo1ik6arg5ehk3auil42j64sp2lagd.apps.googleusercontent.com',
});

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the user's ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    const handleDeepLink = (event) => {
      const { url } = event;
      // Extract data from the URL if needed
      const data = url.split('://')[1];
      Alert.alert('Deep link data', data); // Handle your deep link data here
    };

    Linking.addEventListener('url', handleDeepLink);

    // Check if app was opened with a deep link
    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    // Cleanup
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  const handleOpenLink = () => {
    const dynalink = 'https://nirmitee.dynalinks.app/?link=https://nextjs-portfolio-main-pj38r2ur6-nilu-tudu-4648s-projects.vercel.app/&apn=com.nirmitee.painPal';
    Linking.openURL(dynalink).catch(err => console.error("Couldn't load page", err));
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        <Button
          title="Google Sign-In"
          onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        />
        <Button
          title="Open Dynalink"
          onPress={handleOpenLink}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {user.email}</Text>
      <Button
        title="Open Dynalink"
        onPress={handleOpenLink}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
