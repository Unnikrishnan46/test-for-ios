import { StyleSheet, View } from "react-native";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import {
  setAddImageAndVideoSheetRef,
  setIsDiaryAddImageAndVideoSheetOpen,
} from "@/redux/sheetState";
import ImageSVG from "./svgComponent/imageFileSVG";
import VideoSVG from "./svgComponent/videoSVG";
import { Ionicons } from "@expo/vector-icons";
import ImageGrid from "./ImageGrid";
import * as MediaLibrary from 'expo-media-library';
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {};

const AddImageAndVideoSheet = (props: Props) => {
  const selectedTheme = useSelector((state: any) => state.themeState).selectedThemeData;
  const isDiaryAddImageAndVideoSheetOpen = useSelector((state:any)=>state.sheetState).isDiaryAddImageAndVideoSheetOpen;
  const [images, setImages] = useState<any>([]);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const snapPoints = useMemo(() => ["40%"], []);
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

  async function getAllImageFiles() {
    if (permissionResponse?.status !== 'granted') {
      await requestPermission();
    }
    const { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: 'photo',
    });
    setImages(assets);    
  }

  useEffect(()=>{
    if(isDiaryAddImageAndVideoSheetOpen){
      getAllImageFiles();
    }
  },[isDiaryAddImageAndVideoSheetOpen])


  React.useEffect(() => {
    dispatch(setAddImageAndVideoSheetRef(bottomSheetRef.current));
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
        dispatch(setIsDiaryAddImageAndVideoSheetOpen(false));
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <ImageSVG />
            <VideoSVG />
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add" size={25} color={"#36454F"} />
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />
        <ImageGrid images={images}/>
      </View>
    </BottomSheet>
  );
};

export default AddImageAndVideoSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  addBtn: {
    backgroundColor: "#f5a1f6",
    borderRadius: 50,
    padding: 5,
  },
  seperator: {
    backgroundColor: "#f5a1f6",
    height: 0.5,
    marginTop: 20,
  },
});
