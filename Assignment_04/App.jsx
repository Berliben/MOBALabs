
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react'
export default function App() {

  const [wizards, setWizards] = useState([
    {name: 'Harry Potter', key: '1'},
    {name: 'Hermione Granger', key: '2'},
    {name: 'Ronald Weasley', key: '3'},
    {name: 'Albus Dumbledore', key: '4'},
    {name: 'Severus Snape', key: '5'},
    {name: 'Voldemort', key: '6'},
    {name: 'Mad Eye Moody', key: '7'},
    {name: 'Cedric Digory', key: '8'},
    {name: 'Nagini', key: '9'},
  ])

  return (
    <View style={styles.container}>

      <ScrollView>
        { wizards.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: "lightblue",
      fontSize: 24,
  }
});
