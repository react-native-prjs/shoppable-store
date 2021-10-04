import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, StyleSheet, Button } from "react-native";
import { useEffect, useRef, useContext, useState } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import data from "./../data/";
import { CartContext } from "./../App";
import products_data from "./../data/products_data";

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

  console.log(id, pictureUrl, getCart(), inCart);

  function _addToCart() {
    addToCart(product);
    /*var cartAddedChannel = createBroadcastChannel("cartChange");
    cartAddedChannel.postMessage(null);*/
  }

  function _removeFromCart() {
    removeFromCart(product);
    //cartAddedChannel.postMessage(null);
  }

  return (
    <View style={_styles.cont}>
      <Text style={_styles.title}>{idUpper}</Text>
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

const _styles = StyleSheet.create({
  cont: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 7,
    marginBottom: 7,
  },
});

const styles = StyleSheet.create({
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
