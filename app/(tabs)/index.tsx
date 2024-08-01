import { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, Vibration, View } from "react-native";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedView } from "@/components/ThemedView";

WebBrowser.maybeCompleteAuthSession();

export default function HomeScreen() {
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "543724401318560", // change this for yours
  });

  useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUser(userInfo);
        console.log(JSON.stringify(response, null, 2));
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
    }
  };

  return (
    <ThemedView style={styles.container}>
      {user ? (
        <Profile user={user} />
      ) : (
        <>
          <Button
            disabled={!request}
            title="Continue with Facebook"
            onPress={handlePressAsync}
          />
          {/* <Link href="/test" style={styles.link}>
            <ThemedText>Go to home screen!</ThemedText>
          </Link> */}
        </>
      )}
    </ThemedView>
  );
}

function Profile({ user }) {
  return (
    <View style={styles.profile}>
      <Image source={{ uri: user.picture.data.url }} style={styles.image} />
      <ThemedText style={styles.name}>{user.name}</ThemedText>
      <ThemedText>ID: {user.id}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    alignItems: "center",
  },
  name: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
