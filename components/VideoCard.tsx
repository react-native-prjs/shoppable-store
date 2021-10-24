import { TouchableOpacity } from "react-native";
import * as React from "react";

type VideoCardParams = {
  item: any;
  navigation: any;
};

export default function VideoCard({ item, navigation }: VideoCardParams) {
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
