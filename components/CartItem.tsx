import * as React from "react";

import { Text, View } from "../components/Themed";
import styles from "./../styles/CartScreen";

type CartItemProps = {
  item: any;
};

export default function CartItem({ item }: CartItemProps) {
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
