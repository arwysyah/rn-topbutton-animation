import React, { useState, memo} from "react";
import { View, Text, TouchableOpacity, Animated,} from "react-native";
import { globalStyle, width } from "../styles/styles";
import PropTypes from "prop-types";

const HeaderSlide = ({
  title,
  renderFirstItem,
  renderSecondItem,
  renderThirdItem,
  renderFourthItem,
  buttonColor
}) => {
  const length = title.length;
  length > 4 && console.warn("Sorry the component have 4 as maximum value");
  const [active, setActive] = useState(0);
  const [xTabOne, setTabOne] = useState(0);
  const [xTabThree, setTabThree] = useState(0);
  const translateX = useState(new Animated.Value(0))[0];
  const handleSlide = (type, index) => {
    Animated.spring(translateX, {
      toValue: index === 0 ? index : (width / length) * (index * 0.95),
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  function handleChange(type, tab) {
    setActive(type), handleSlide(tab, type);
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ width: width * 0.95, marginLeft: "auto", marginRight: "auto" }}
      >
        <View style={globalStyle.parentHeader}>
          <Animated.View
            style={{
              position: "absolute",
              width: (width * 0.95) / length,
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: buttonColor,
              transform: [
                {
                  translateX,
                },
              ],
            }}
          />

          {title.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onLayout={(event) =>
                  setTabOne(event.nativeEvent.layout.x / index)
                }
                onPress={() => handleChange(index, xTabOne)}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0.7,
                  borderColor: active === index ? buttonColor : "grey",
                  borderRightWidth: index === length - 1 ? 1 : 0,
                  borderTopRightRadius: index === length - 1 ? 4 : 0,
                  borderBottomRightRadius: index === length - 1 ? 4 : 0,
                  borderTopLeftRadius: index !== 0 ? 0 : 4,
                  borderBottomLeftRadius: index !== 0 ? 0 : 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: active === index ? "#FFFFFF" : "black",
                    fontWeight: active === index ? "bold" : "normal",
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={globalStyle.content}>
        {active == 0
          ? renderFirstItem()
          : active === 1
          ? renderSecondItem()
          : active === 2
          ? renderThirdItem()
          : renderFourthItem()}
      </View>
    </View>
  );
};

HeaderSlide.PropTypes = {
  title: PropTypes.array.isRequired,
  renderFirstItem: PropTypes.func.isRequired,
  renderSecondItem: PropTypes.func.isRequired,
  renderThirdItem: PropTypes.func,
  renderFourthItem: PropTypes.func,
};
HeaderSlide.defaultProps = {
  buttonColor:'#5790f2'
  };
export default memo(HeaderSlide);
