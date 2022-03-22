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
    this.picture = require("./assets/flowers.png")
    this.state = {
      location: '',
      forecast: null,
      picture: this.picture
    };
  }

  onTextChange (text) {
    this.setState({location: text});
  }

  checkWeather(weather) {
    console.log(weather)
    switch (weather) {
      case "Clouds":
        this.picture = require("./assets/clouds.jpeg")
        break;
      case "Rain":
        this.picture = require("./assets/rain.jpeg")
        break;
      case "Snow":
        this.picture = require("./assets/snow.jpeg")
        break;
      case "Clear":
        this.picture = require("./assets/flowers.png")
        break;
      default:
        this.picture = require("./assets/flowers.png")
        break;
    }
  }
  
  async onSearch () {
      await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+this.state.location+"&appid=425ebfd45a7bca2121aa783431ad350f")
        .then(response => response.json())
        .then(data => {
          fetch("https://api.openweathermap.org/data/2.5/weather?lat="+data[0].lat+"&lon="+data[0].lon * -1+"&appid=425ebfd45a7bca2121aa783431ad350f")
            .then(response => response.json())
            .then(data => { 
              this.checkWeather(data.weather[0].main)
              this.setState({
                location: this.state.location,
                forecast: {
                  main: data.weather[0].main,
                  description: data.weather[0].description,
                  temp: Math.round(data.main.temp - 273.15),
                },
                picture: this.picture,
          })})
        }).catch(e => {
          this.setState({
            forecast: {
            main: "Not found",
            description: "Not found",
            temp: "Not found",
          }})
          console.log(e)
        })
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
        <ImageBackground source={this.picture}
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
    flex: 2,
    alignItems: 'center',
    width: "100%"
  },
  backdrop: {
    paddingTop: 50,
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

