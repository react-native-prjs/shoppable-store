import * as React from "react";

import { Text, View } from "../components/Themed";
import { CartContext } from "../App";
import styles from "./../styles/CartScreen";
import CartItem from "./../components/CartItem";

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
