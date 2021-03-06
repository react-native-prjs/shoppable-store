import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform } from "react-native";
import { useEffect, useRef } from "react";

import { Text, View } from "../components/Themed";
import data from "./../data/";
import styles from "./../styles/ModalScreen";

type ModalParams = {
  route: any;
  navigation: any;
};

export default function ModalScreen({ route, navigation }: ModalParams) {
  const { name, id } = route.params;
  console.log(name);
  const videoRef = useRef(null);
  useEffect(() => {
    var source = data[id] as any;
    console.log(source);

    if (window.cloudinary.Cloudinary) {
      var cld = window.cloudinary?.Cloudinary.new({ cloud_name: "demo" });
      var demoplayer = cld?.videoPlayer(videoRef.current).width(100);
      demoplayer.source(id, source);
    }
  });

  return (
    <View style={styles.cont}>
      <Text style={styles.title}>{name}</Text>
      <video
        style={{ width: "100%" }}
        ref={videoRef}
        height="240px"
        width="100%"
        autoPlay={true}
        controls
      ></video>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
/*
function _ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      { Use a light status bar on iOS to account for the black space above the modal }
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
*/
