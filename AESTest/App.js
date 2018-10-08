/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CryptoJS from "crypto-js";
import CryptoJSAesJson from "./aes-json-format"
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  TestSendData() {
    const that = this
    return new Promise(function (resolve, reject) {
        let datas = '{"user":"demo1","pass":"demo2"   }'
        console.log(datas)
         let ta = CryptoJS.AES.encrypt(JSON.stringify(datas), "a1s2d3", {format: CryptoJSAesJson}).toString(); 
         console.log(ta)
         fetch('http://localhost/phpapi/Api.php', {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
             body:ta
         
         })
            .then((response) => {
              // console.log(response)
               return response.json()
            })
            .then((responseJson) => {
                console.log(responseJson)
                resolve()
            })
            .catch((error) => {
                //console.error(error);
                reject()
            })

    })
}
componentDidMount(){
  this.TestSendData()
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
