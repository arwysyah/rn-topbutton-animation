import React, {useState, useRef, memo, useMemo, useCallback} from 'react';
import {View, Text, TouchableOpacity, Animated, Image} from 'react-native';
import {globalStyle, width, height, TOP} from './styles/styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types';
const ButtonTio = [{
    id:1,
    name:'clipboard-list',
   title:'Article'
},{
    id:2,
    name:'google-lens',
    title:'Foto'
},
{
    id:3,
    name:'google-photos',
    title:'Question'
}]
const HeaderSlide = ({navigation, gallery}) => {

  const [active, setActive] = useState(0);
  const [xTabOne, setTabOne] = useState(0);
  const [xTabTwo, setTabTwo] = useState(0);
  const [xTabThree, setTabThree] = useState(0);
  const translateX = useState(new Animated.Value(0))[0];
  const translateXTabOne = useState(new Animated.Value(0))[0];
  const translateXTabTwo = useState(new Animated.Value(width))[0];
  const translateXTabThree = useState(new Animated.Value(width / 2))[0];
  const handleSlide = (type) => {
   
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width / 100,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: width / 2 / 100,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: width / 100,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: width / 2 / 100,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    }
  };
  function handleChange(type, tab) {
      console.log(type,tab)
    setActive(type), handleSlide(tab);
  }
  return (
    <View style={{flex: 1}}>
      <View
        style={{width: width * 0.95, marginLeft: 'auto', marginRight: 'auto'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 20,
            height: 36,
            position: 'relative',
            backgroundColor: 'white',
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              width: (width * 0.95) / ButtonTio.length,
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

{ButtonTio.map((item,index)=>{return(
  <TouchableOpacity
  key={index}
  onLayout={(event) => setTabOne(event.nativeEvent.layout.x/index+1)}
  onPress={() => handleChange(index, xTabOne)}
  style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: active === index ? '#5790f2' : 'grey',
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 4,
  }}>
  <MaterialCommunity
    name={item.name}
    color={active === index ? '#FFF' : 'black'}
    size={21}
  />
  <Text
    style={{
      fontSize: 10,
      color: active === index ? '#FFF' : 'black',
      fontWeight: active === index ? 'bold' : 'normal',
    }}>
   {item.title}
  </Text>
</TouchableOpacity>
)})}
        
          {/* <TouchableOpacity
            onLayout={(event) => setTabTwo(event.nativeEvent.layout.x)}
            onPress={() => handleChange(1, xTabTwo)}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.7,
              borderColor: active === 1 ? '#5790f2' : 'grey',
              // borderLeftWidth: 0,
              // borderTopLeftRadius: 0,
              // borderBottomLeftRadius: 0,
              // borderRadius: 4,
            }}>
            <MaterialCommunity
              name="google-lens"
              color={active === 1 ? '#FFF' : 'black'}
              size={21}
            />
            <Text
              style={{
                fontSize: 10,
                color: active === 1 ? '#FFF' : 'black',
                fontWeight: active === 1 ? 'bold' : 'normal',
              }}>
              Foto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onLayout={(event) => setTabThree(event.nativeEvent.layout.x)}
            onPress={() => handleChange(2, xTabThree)}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.7,
              borderColor: active === 2 ? '#5790f2' : 'grey',
              borderLeftWidth: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderRadius: 4,
            }}>
            <MaterialCommunity
              name="google-photos"
              color={active === 2 ? '#FFF' : 'black'}
              size={21}
            />
            <Text
              style={{
                fontSize: 10,
                color: active === 2 ? '#FFF' : 'black',
                fontWeight: active === 2 ? 'bold' : 'normal',
              }}>
              Question
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <View>
        {active === 0 ? (
          <Animated.View
            style={{
              transform: [
                {
                  translateX: translateXTabOne,
                },
              ],
            }}>
          
          </Animated.View>
        ) : active === 2 ? (
          <Animated.View
            style={{
              transform: [
                {
                  translateX: translateXTabOne,
                },
              ],
            }}>
            <View>
            
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                  color: '#FFFFFF',
                  top: -TOP * 2.4,
                  fontWeight: 'bold',
                  color:'black'
                }}>
                Kamu belum memiliki {'\n'}postingan
              </Text>
            </View>
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              transform: [
                {
                  translateX: translateXTabThree,
                },
              ],
            }}>
            {gallery === ""? (
              <View>
                <Image
                  source={require('../../assets/notfound.jpg')}
                  style={globalStyle.handlingImage}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 22,
                    color: '#FFFFFF',
                    top: -TOP * 2.4,
                    fontWeight: 'bold',
                  }}>
                  Kamu belum memiliki {'\n'}Foto
                </Text>
              </View>
            ) : (
           <View style={{flex:1,justifyContent:"center"}}>

           </View>
            )}
          </Animated.View>
        )}
      </View>
    </View>
  );
};

HeaderSlide.PropTypes = {
  gallery: PropTypes.object,
  articleData: PropTypes.array,
};
HeaderSlide.defaultProps = {
  gallery: [],
  articleData: [],
};
export default memo(HeaderSlide);
