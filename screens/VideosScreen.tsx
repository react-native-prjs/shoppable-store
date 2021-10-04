import { useEffect, useState, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import * as React from "react";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

declare global {
  interface Window {
    cloudinary: any;
  }
}

window.cloudinary = window.cloudinary || {};

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Videos">) {
  const numColumns = 2;
  const [cld, setCld] = useState();
  const [loadComplete, setLoadComplete] = useState(false);

  const videos = [
    {
      id: "forest_bike",
      name: "Forest Bike",
      posterUrl:
        "https://res.cloudinary.com/demo/video/upload/c_limit,f_auto,q_auto,w_960/forest_bike.jpg",
    } /*
    "https://res.cloudinary.com/demo/video/upload/c_limit,f_auto,q_auto,w_1920/kayak.jpg",
    "https://res.cloudinary.com/demo/video/upload/c_limit,f_auto,q_auto,w_960/snow_horses.jpg",
    "https://res.cloudinary.com/demo/video/upload/c_limit,f_auto,q_auto,w_960/snow_deer.jpg",*/,
    {
      id: "sea_turtle",
      name: "Sea Turtle",
      posterUrl:
        "https://res.cloudinary.com/demo/video/upload/c_limit,f_auto,q_auto,w_960/sea_turtle.jpg",
    },
    /*"https://res.cloudinary.com/demo/video/upload/c_limit,f_auto,q_auto,w_960/elephants.jpg",*/
    {
      id: "rafting",
      name: "Rafting",
      posterUrl:
        "https://res.cloudinary.com/demo/video/upload/c_limit,f_auto,q_auto,w_960/rafting.jpg",
    },
  ];

  /*useEffect(() => {
    if (window.cloudinary.Cloudinary) {
      var _cld = window.cloudinary?.Cloudinary.new({ cloud_name: "demo" });
      setCld(_cld);
      setLoadComplete(true);
    }
  }, [cld]);*/

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shoppable Videos</Text>
      <FlatList
        numColumns={numColumns}
        data={videos}
        renderItem={({ item }) => {
          return (
            <View style={styles.videoCard}>
              <VideoCard navigation={navigation} item={item} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 7,
    marginBottom: 7,
  },
  flatList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    width: "100%",
    margin: "0 10px",
  },
  videoCard: {
    aspectRatio: 1,
    flex: 1 / 2,
    height: "140px",
    width: "140px",
    backgroundColor: "white",
    margin: "3px",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

type VideoCardParams = {
  item: any;
  navigation: any;
};

function VideoCard({ item, navigation }: VideoCardParams) {
  function handleHelpPress() {
    navigation.navigate("Modal", { name: item.name, id: item.id });
  }

  return (
    <TouchableOpacity onPress={handleHelpPress}>
      <video
        height="140px"
        data-cld-public-id="dog"
        poster={item.posterUrl}
        className="cld-video-player cld-video-player-skin-dark"
      ></video>
    </TouchableOpacity>
  );
}
