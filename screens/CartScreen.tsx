import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { CartContext } from "../App";

export default function TabTwoScreen() {
  const { getCart } = React.useContext(CartContext as any);
  const [cart] = React.useState(getCart());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart List</Text>
      {cart.map((item: any) => (
        <CartItem item={item} />
      ))}
    </View>
  );
}

type CartItemProps = {
  item: any;
};

function CartItem({ item }: CartItemProps) {
  return (
    <>
      <View style={styles.cartItemContainer} lightColor="#eee">
        <img
          style={{ borderRadius: 2, marginRight: 4 }}
          src={item?.imageUrl}
          width="70px"
          height="70px"
        />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ color: "white", fontSize: 20 }}>{item?.name}</Text>
          <Text style={{ color: "white", fontSize: 20 }}>${item?.price}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 /*,
    alignItems: "center",
    justifyContent: "center",*/,
    marginLeft: 9,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cartItemContainer: {
    paddingBottom: 24,
    marginVertical: 30,
    height: 1,
    width: "80%",
    display: "flex",
    flexDirection: "row",
  },
});
