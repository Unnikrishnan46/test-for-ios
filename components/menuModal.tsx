import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { setMenuBottomSheetRef } from "@/redux/sheetState";
import { Link } from "expo-router";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

type Props = {};

const MenuModal = (props: Props) => {
  const sheetState = useSelector((state: any) => state.sheetState);
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

  React.useEffect(() => {
    dispatch(setMenuBottomSheetRef(bottomSheetRef.current));
  }, [dispatch, bottomSheetRef]);

  const menuData = [
    {
      name: "Premium",
      icon: <AntDesign name="export" size={30} />,
      route: "(screens)/premium",
    },
    {
      name: "Themes",
      icon: <Ionicons name="color-palette-outline" size={30} />,
      route: "(screens)/themes",
    },
    {
      name: "Privacy",
      icon: <MaterialCommunityIcons name="shield-check-outline" size={30} />,
      route: "(screens)/privacyScreen",
    },
    {
      name: "Back Up & Restore",
      icon: <Feather name="download-cloud" size={30} />,
      route: "(screens)/backUpAndRestoreScreen",
    },
    {
      name: "Export",
      icon: <Feather name="printer" size={30} />,
      route: "(screens)/exportScreen",
    },
    {
      name: "Settings",
      icon: <Feather name="settings" size={30} />,
      route: "(screens)/settings",
    },
  ];

  return (
    <BottomSheet
      style={{ backgroundColor: "white" }}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      index={-1}
    >
      <View style={styles.mainContainer}>
        {menuData?.map((item, index) => (
          <Link
            onPress={() => {
              bottomSheetRef.current?.close();
            }}
            key={index}
            href={`${item?.route}`}
          >
            <View style={styles.subContainer}>
              {item?.icon}
              <Text style={styles.text}>{item?.name}</Text>
            </View>
          </Link>
        ))}
      </View>
    </BottomSheet>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    justifyContent:"space-between",
    paddingVertical:15
  },
  text: {
    fontSize: 20,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: Platform.select({
      // ios: 17,
      // android: 5,
    }),
    gap: 10,
  },
});
