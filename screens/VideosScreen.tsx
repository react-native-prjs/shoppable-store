import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import * as React from "react";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import VideoCard from "../components/VideoCard";
import videos from "./../data/videos";
import styles from "./../styles/VideosScreen";

declare global {
  interface Window {
    cloudinary: any;
  }
}

window.cloudinary = window.cloudinary || {};

export default function VideosScreen({
  navigation,
}: RootTabScreenProps<"Videos">) {
  const numColumns = 2;

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
