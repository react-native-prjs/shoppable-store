import { StyleSheet } from "react-native";

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
export default styles;
