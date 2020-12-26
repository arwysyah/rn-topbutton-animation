import React, { useState, useRef, memo, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import { globalStyle, width } from '../styles/styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types';
const buttonComponent = [{
  id: 1,
  name: 'clipboard-list',
  title: 'Article'
}, {
  id: 2,
  name: 'google-lens',
  title: 'Foto'
},
{
  id: 3,
  name: 'google-photos',
  title: 'Question'
}]
const HeaderSlide = ({ navigation, gallery }) => {


  const length = buttonComponent.length
  length > 3 && console.warn('Sorry the component have 3 as maximum value')

  const [active, setActive] = useState(0);
  const [xTabOne, setTabOne] = useState(0);
  const [xTabTwo, setTabTwo] = useState(0);
  const [xTabThree, setTabThree] = useState(0);
  const translateX = useState(new Animated.Value(0))[0];
  const translateXTabOne = useState(new Animated.Value(0))[0];
  const translateXTabTwo = useState(new Animated.Value(width))[0];
  const translateXTabThree = useState(new Animated.Value(width / 2))[0];
  const handleSlide = (type, index) => {
    Animated.spring(translateX, {
      toValue: index === 0 ? index : index === 1 ? width / (1.58 * (index + 1)) : width / 1.58,
      // toValue: index===0 ? index :index=== 1 ? width/(1.58*(index+1)): width/1.58,
      duration: 100,
      useNativeDriver: true,
    }).start();

  };
  function handleChange(type, tab) {

    setActive(type), handleSlide(tab, type);
  }
  console.log(active)
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ width: width * 0.95, marginLeft: 'auto', marginRight: 'auto' }}>
        <View
          style={globalStyle.parentHeader}>
          <Animated.View
            style={{
              position: 'absolute',
              width: (width * 0.95) / length,
              height: '100%',
              top: 0,
              left: 0,
              backgroundColor: '#5790f2',
              transform: [
                {
                  translateX,
                },
              ],
            }}
          />

          {buttonComponent.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onLayout={(event) => setTabOne(event.nativeEvent.layout.x / index)}
                onPress={() => handleChange(index, xTabOne)}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 0.7,
                  borderColor: active === index ? '#5790f2' : 'grey',
                  borderRightWidth: index === 2 ? 1 : 0,
                  borderTopRightRadius: index === length - 1 ? 4 : 0,
                  borderBottomRightRadius: index === length - 1 ? 4 : 0,
                  borderRadius: 4,

                }}>
                <MaterialCommunity
                  name={item.name}
                  color={active === index ? '#FFFFFF' : 'black'}
                  size={21}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: active === index ? '#FFFFFF' : 'black',
                    fontWeight: active === index ? 'bold' : 'normal',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
      <View style={globalStyle.content}>
        <Image
          source={require('../assets/notfound.jpg')}
          style={globalStyle.handlingImage}
        />
      </View>
    </View>
  );
};

HeaderSlide.PropTypes = {
  buttonComponent: PropTypes.object
};
HeaderSlide.defaultProps = {
  
};
export default memo(HeaderSlide);
