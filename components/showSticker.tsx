import { AntDesign } from "@expo/vector-icons";
import React, { useRef } from "react";
import { View, Animated, PanResponder, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

type Props = {
  source:any;
  itemCount:any;
  editMode:any;
}

const ShowSticker = ({source,itemCount,editMode}:Props) => {
  const stickerState = useSelector(
    (state: any) => state.toolBarState.stickerState
  );

  const pan = useRef<any>(new Animated.ValueXY()).current;
  const scale = useRef<any>(new Animated.Value(1)).current;
  const lastScale = useRef(1);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({ x: pan.x._value, y: pan.y._value });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  const scaleResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // console.log("Scale PanResponder Grant");
        // // scale.setOffset(lastScale.current);
      },
      onPanResponderMove: (e, gestureState) => {
        // console.log("Scale PanResponder Move");
        let scaleFactor =
          lastScale.current + gestureState.dy / 200 - gestureState.dx / 200;
        if (scaleFactor < 0.1) scaleFactor = 0.1; // Minimum scale
        scale.setValue(scaleFactor);
      },
      onPanResponderRelease: () => {
        // console.log("Scale PanResponder Release");
        scale.flattenOffset();
        lastScale.current = scale.__getValue(); // Save the last scale value
      },
    })
  ).current;

  return (
    <Animated.View style={[{ position: "absolute" },styles.container,pan.getLayout(),{ transform: [{ scale: scale }] },{}]}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          
          
        ]}
      >
        <Image
          source={{ uri: source }}
          style={{ width: 100, height: 100 }}
        />
      </Animated.View>
      <View style={[styles.altBtn,{display:editMode ? "flex" : "none"}]}>
        <Animated.View {...scaleResponder.panHandlers}>
          <AntDesign name="arrowsalt" size={15} />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default ShowSticker;

const styles = StyleSheet.create({
  container: { borderWidth: 0.2 },
  altBtn: { position: "absolute", top: -8, right: -8, zIndex: 500000 },
});
