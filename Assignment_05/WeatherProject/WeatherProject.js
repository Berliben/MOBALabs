'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
  Platform,
} from 'react-native';

import Forecast from './Forecast';




class WeatherProject extends Component {

  constructor (props) {
    super(props);
    this.state = {
      location: '',
      forecast: null,
      
      // forecast: {
      //   main: 'Clouds',
      //   description: 'few clouds',
      //   temp: 23.5
      // }
  
    };
  }

  onTextChange (text) {
    this.setState({location: text});
  }
  
  onSearch () {
  
    // call API    
  
  }


  render () { 
    var content = null;
    if (this.state.forecast !== null) {
      content = <Forecast 
                  style={styles.forecast}
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp} />;
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./resources/flowers.png')}
               imageStyle={{resizeMode:'cover'}}
               style={styles.backdrop}>
          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={styles.mainText}>
               Current weather for 
             </Text>
             <View style={styles.locationContainer}>
               <TextInput
                 style={[styles.locationCode, styles.mainText]}
                 onChangeText={this.onTextChange.bind(this)} />
                <Button   
                  onPress={this.onSearch.bind(this)}
                  title="Search"/>
             </View>
           </View>
           {content}
         </View>
        </ImageBackground>
      </View>
    );
  }

}


var baseFontSize = 16;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backdrop: {
    paddingTop: (Platform.OS === 'ios') ? 50 : 0,
    flex: 1,
    alignSelf: 'stretch',
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainText: {
    fontSize: baseFontSize,
    color: '#FFFFFF'
  },
  locationContainer: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    marginBottom: 15
  },
  locationCode: {
    width: 100,
    height: baseFontSize+25,
  },
});

export default WeatherProject

