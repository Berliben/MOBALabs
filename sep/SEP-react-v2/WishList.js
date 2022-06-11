import React, {useState, useContext } from 'react';

import { ActivityIndicator, View, StyleSheet, SafeAreaView, FlatList, Text, Image, Button } from 'react-native';
import { CartContext } from './CartContext';

export function WishList() {
  const {items, getTotalPrice} = useContext(CartContext);

  const header = () => {
    return (
      <View>           
        <View style={{
          height: 50,
          width: "100%",
          backgroundColor: "#00B8D4",
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <Text style={{ fontSize: 24, color: 'white' }}> Guten Tag Herr Kadrii </Text>

        </View>
      </View>
    );
  }

  const divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'black',
        }}
      />
    );
  }

  const footer = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.itemText}>Total: </Text>
        <Text style={styles.priceText}> {getTotalPrice()} CHF </Text> 
      </View>
    )
  }

  const ItemRender = ({ item }) => (
    <View style={styles.listItem}>
        <Image
          style={styles.image}
          source={{
            uri: item.product.thumbnail,
          }}
        />      
        <Text style={styles.itemText}> {item.product.title} </Text>
        <Text style={styles.itemText}> {item.product.price} CHF </Text> 
    </View>
  );

  return (
    <SafeAreaView style={styles.MainContainer}>
      <FlatList
        data={items}
        renderItem={({ item }) => <ItemRender item={item} />}
        ItemSeparatorComponent={divider}
        keyExtractor={item => item.id}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  listItem: {
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row'
  },

  itemText: {
    fontSize: 14,
    color: 'black',
  },
  image: {
    height: 50,
    width: 50
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20
  },
  priceText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
  },

});