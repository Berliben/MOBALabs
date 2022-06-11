import React, { useContext, useState } from 'react';

import {View, StyleSheet, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { CartContext } from './CartContext';


export function ProductDetails({product}) {
    const [liked, setLiked] = useState(false);
    const { addItemToCart } = useContext(CartContext);

    
    const modifyCart = () => {
        setLiked(!liked)
        addItemToCart(product)  
    }

    return (
        <View style={styles.listItem}>
        <Image
          style={styles.image}
          source={{
            uri: product.thumbnail,
          }}
        />      
        <Text style={styles.itemText}> {product.title} </Text>
        <Text style={styles.priceText}> {product.price} CHF </Text>
        <Icon
          name={liked ? 'heart' : 'heart-outline'}
          type='ionicon'
          onPress={modifyCart} />      
      </View>        
    )
}

const styles = StyleSheet.create({
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
  
    itemText: {
      fontSize: 14,
      color: 'black',
    },

    priceText: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
      },

    image: {
      height: 50,
      width: 50
    },
  
  });