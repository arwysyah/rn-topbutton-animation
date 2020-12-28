# react-native-topbutton-animation

<p align="center">
  <a href="https://reactjs.org/">
    <img
      alt="Node.js"
      src="https://i.udemycdn.com/course/750x422/1049092_8c52_2.jpg"
      width="200"
    />
  </a>
</p>

</h1>

<br/>

<br/>

<p align="center">
 
  </a>
  <a href="#">
    <img title="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102">
  </a>
  <a href="https://dev.to/arwysyah">
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Arwy Syahputra Siregar's DEV Profile" height="30" width="30">
</a>
  <a href="https://github.com/arwysyah?tab=followers">
    <img title="Followers" src="https://img.shields.io/github/followers/arwysyah?style=social">
  </a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
<br/>
https://www.npmjs.com/package/rn-topbutton-animation
</p>

## BUILD SETUP

```bash

## Installation
Version 1.0.4

npm install rn-topbutton-animation --save



```

## USAGE

```js

import React from 'react';
import {View, Text, Image} from 'react-native';
import {HeaderSlide} from 'rn-topbutton-animation';
import {globalStyle, width, height} from '../components/styles';

export default function Check({navigation}) {
  function renderFirstItem() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          top: width / 4,
        }}>
        <Image
          source={require('../../assets/notfound.jpg')}
          style={{
            justifyContent: 'center',
            height: height * 0.5,
            resizeMode: 'center',
            top: height / 4,
          }}
        />
      </View>
    );
  }
  function renderSecondItem() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          top: width / 4,
        }}>
        <Text>Hello world2</Text>
      </View>
    );
  }
  function renderThirdItem() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          top: width / 4,
        }}>
        <Text>Hello world3</Text>
        <Text>I Just Built this package</Text>
      </View>
    );
  }
  function renderFourthItem() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          top: width / 4,
        }}>
        <Text>Hello world4</Text>
        <Text>I am Software Engineer</Text>
      </View>
    );
  }
  const data = ['article', 'foto',];
  return (
    <View>
      <HeaderSlide
        title={data}
        renderFirstItem={renderFirstItem}
        renderSecondItem={renderSecondItem}
        renderThirdItem={renderThirdItem}
        renderFourthItem={renderFourthItem}
      />
    </View>
  );
}

```


## Current API(Property)

| Property    | Type                     | Description                       |
| ----------- | ------------------------ | --------------------------------- |
| renderItem1  | function  (required)              | render component   
| renderItem2  | function  (required)              | render component  
| renderItem3 | function    (optional)            | render component  
| renderItem4  | function  (optional)              | render component                 |
| booleanFunc | PropTypes.function       | update state item                 |
|title        | PropTypes.Array (required) |button title

note : the amount of render item must same with the length of title.
title must have length at least 2 and maximum 4


## Project Documentation

<!-- <p align="center"> -->
  <img src="assets/notfound.jpg" width=200 height=300/>
<!-- </p> -->

- Author Account

```bash
Arwy Syahputra Siregar
github.com/arwysyah

```

<p > Copyright ©</p> <p style="color:green;">by Arwy Syahputra Siregar</p>
