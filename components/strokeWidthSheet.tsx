import { StyleSheet, View, useWindowDimensions } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { setStrokeWidthSheetRef } from "@/redux/sheetState";
import Slider from "@react-native-community/slider";
import { Canvas, Circle, Path } from "@shopify/react-native-skia";
import { setStrokeWidth } from "@/redux/drawingToolsState";

type Props = {};

const StrokeWidthSheet = (props: Props) => {
  const strokeWidth = useSelector((state:any)=>state.drawingToolState).strokeWidth;
  const snapPoints = useMemo(() => ["30%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();

  React.useEffect(() => {
    dispatch(setStrokeWidthSheetRef(bottomSheetRef.current));
  }, [dispatch, bottomSheetRef]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const slideChange = (value:any)=>{
    dispatch(setStrokeWidth(value));
  }

  const r = 30; // Radius of the circle
  const cx = width / 2; // Center x-coordinate of the circle

  return (
    <BottomSheet
      style={{ backgroundColor: "white" }}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      index={-1}
      enableContentPanningGesture={false}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Canvas style={{ width: "100%",borderWidth:1,height:100, borderColor:"red",backgroundColor:"#F9F6EE" }}>
            <Circle style={"stroke"} strokeWidth={strokeWidth} cx={cx} cy={50} r={r} color="#e74c3c" />
          </Canvas>
        </View>
        <Slider
          style={{ width: "80%", height: 40 ,marginTop:20}}
          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          value={strokeWidth}
          onValueChange={(value)=>{slideChange(value)}}
        />
      </View>
    </BottomSheet>
  );
};

export default StrokeWidthSheet;

const styles = StyleSheet.create({});
