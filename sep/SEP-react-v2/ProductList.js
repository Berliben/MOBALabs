import React, { useEffect, useState } from 'react';

import { ActivityIndicator, View, StyleSheet, SafeAreaView, FlatList, Text,Button } from 'react-native';

import { ProductDetails } from './ProductDetails';

export function ProductList() {
    const [jsonData, setJsonData] = useState('');
    const [filtered, setFiltered] = useState('');
    const [showIndicator, setShowIndicator] = useState(true);

    useEffect(() => {
        async function fetchData() {
          fetch('https://dummyjson.com/products?limit=50')
            .then((response) => response.json())
            .then((responseJson) => {
              setJsonData(responseJson.products);
              setShowIndicator(false);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        fetchData();
      }, []);


  const header = () => {
    return (
      <View>
        <View style={styles.buttons}>
          <Button
            onPress={() => {setFiltered(jsonData.filter((product) => product.price < 100))}}
            title="<100"
            color="#841584"
          /> 
          <Button
            onPress={() => {setFiltered(jsonData.filter((product) => product.price >= 100 && product.price <= 120))}}
            title="100-120"
            color="#841584"
          /> 

          <Button
            onPress={() => {setFiltered(jsonData.filter((product) => product.price >= 120 && product.price <= 150))}}
            title="120-150"
            color="#841584"
          />

          <Button
            onPress={() => {setFiltered(jsonData.filter((product) => product.price > 170))}}
            title=">170"
            color="#841584"
          />
        </View>                 
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

  return (
    <SafeAreaView style={styles.MainContainer}>

      <ActivityIndicator
        size="large"
        color="red"
        animating={showIndicator}
        style={styles.activityIndicator} />

      <FlatList
        data={filtered.length == 0 ? jsonData : filtered}
        renderItem={({ item }) => <ProductDetails product={item} />}
        ItemSeparatorComponent={divider}
        keyExtractor={item => item.id}
        ListHeaderComponent={header}
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

  itemText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
  },

  activityIndicator: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  image: {
    height: 50,
    width: 50
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20
  }

});