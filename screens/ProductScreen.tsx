import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, Button } from "react-native";
import { useEffect, useContext, useState } from "react";

import { Text, View } from "../components/Themed";
import { CartContext } from "./../App";
import products_data from "./../data/products_data";
import styles from "./../styles/ProductScreen";

type ModalParams = {
  route: any;
  navigation: any;
};

export default function ProductScreen({ route, navigation }: ModalParams) {
  const { id, pictureUrl } = route.params;
  var idUpper = id.split("_").join(" ").toLocaleUpperCase();
  const [inCart, setInCart] = useState(false);
  const [product, setProduct] = useState(null);
  const { getCart, addToCart, removeFromCart } = useContext(CartContext as any);

  useEffect(() => {
    const _product = products_data.find((_product) => _product.id === id);
    const cart = getCart();
    const _cartFound = cart.find((_prdct: any) => _prdct.id === id);
    const inCart = _cartFound ? true : false;

    setProduct(_product as any);
    console.log(_product);
    setInCart(inCart);
  }, [id]);

  function _addToCart() {
    addToCart(product);
  }

  function _removeFromCart() {
    removeFromCart(product);
  }

  return (
    <View style={styles.cont}>
      <Text style={styles.title}>{idUpper}</Text>
      <img src={pictureUrl} style={{ width: "100%" }} />
      <View
        style={{
          marginBottom: 9,
          marginTop: 9,
          width: "100%",
        }}
      >
        <Button
          title={inCart ? "Remove from Cart" : "Add to Cart"}
          onPress={() => {
            inCart ? _removeFromCart() : _addToCart();
          }}
          color={inCart ? "red" : "#2196F3"}
        />
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
