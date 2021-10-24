import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import useScript from "./hooks/useScript";
import Navigation from "./navigation";

export const CartContext = React.createContext(null);

export default function App() {
  const getCart = useCallback(() => {
    const state = window.localStorage.getItem("cart");
    return state ? JSON.parse(state) : [];
  }, []);

  const addToCart = useCallback((product) => {
    var state = window.localStorage.getItem("cart");
    var arr = state ? [...JSON.parse(state), product] : [product];
    window.localStorage.setItem("cart", JSON.stringify(arr));
    window.location.reload();
  }, []);

  const removeFromCart = useCallback((product) => {
    var state = window.localStorage.getItem("cart");
    var remProducts = JSON.parse(state as string).filter(
      (_prduct: any) => _prduct.id != product?.id
    );
    window.localStorage.setItem("cart", JSON.stringify(remProducts));
    window.location.reload();
  }, []);

  useScript();
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <link
          href="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css"
          rel="stylesheet"
        />
        <CartContext.Provider
          value={{ getCart, addToCart, removeFromCart } as any}
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </CartContext.Provider>
      </SafeAreaProvider>
    );
  }
}
