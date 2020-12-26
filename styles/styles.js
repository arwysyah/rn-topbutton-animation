import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const SIZE = width * 0.62;
const TOP = 24;
const globalStyle = StyleSheet.create({

parentHeader:{
  flexDirection: 'row',
  marginTop: 20,
  marginBottom: 20,
  height: 36,
  position: 'relative',
  backgroundColor: 'white',
},
  
  
  content: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent:'center'
  },
  image: {
    width: 200,
    height: 200,
  },
  
  handlingImage: {
    width: width / 1.4,
    height: width / 1.4,
    justifyContent:"center",
    top:width/1.5,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    // alignContent:'center'
  },
  });

export {
  globalStyle,
  width,
  height,
  TOP,

};
