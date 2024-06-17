import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import {
  setDiaryBackgroundSheetRef,
  setIsDiaryBackgroundSheetOpen,
} from "@/redux/sheetState";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {};

const DiaryBackgroundSheet = (props: Props) => {
  const selectedTheme = useSelector(
    (state: any) => state.themeState
  ).selectedThemeData;
  const snapPoints = useMemo(() => ["25%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useDispatch();
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

  React.useEffect(() => {
    dispatch(setDiaryBackgroundSheetRef(bottomSheetRef.current));
  }, [dispatch, bottomSheetRef]);
  return (
    <BottomSheet
      style={{ backgroundColor: "white" }}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      index={-1}
      onClose={() => {
        dispatch(setIsDiaryBackgroundSheetOpen(false));
      }}
    >
      <View style={{flex:1,justifyContent:"center",alignItems:"center",paddingHorizontal:50}}>
        <TouchableOpacity style={[styles.btn,{backgroundColor:selectedTheme?.buttonBg}]}>
          <Text style={{fontFamily:"SFProDisplay",fontSize:20}}>Image from gallery</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default DiaryBackgroundSheet;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
