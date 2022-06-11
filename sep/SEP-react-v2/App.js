import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import { CartProvider } from './CartContext';
import { ProductList } from './ProductList';
import { WishList } from './WishList';
import { TabView, SceneMap } from 'react-native-tab-view';

const renderScene = SceneMap({
  products: ProductList,
  wishlist: WishList,
});

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'products', title: 'Produkte' },
    { key: 'wishlist', title: 'Wunschliste' },
  ]);

  return (
    <CartProvider>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />      
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
