import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import {
  setFontStyleSheetOpenRef,
  setIsFontStyleSheetOpen,
} from "@/redux/sheetState";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { dataArray } from "@/util/colorList";
import { fontDataList } from "@/util/fontList";
import { TouchableOpacity,TouchableWithoutFeedback } from "react-native-gesture-handler";

type Props = {};

const width = Dimensions.get("window").width;

const FontStyleSheet = (props: Props) => {
  const snapPoints = useMemo(() => ["30%","50%" ], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setFontStyleSheetOpenRef(bottomSheetRef.current));
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

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.colorBox,
        { backgroundColor: item?.color, marginBottom: 10 },
      ]}
    />
  );

  const fontRenderItem = ({ item }: any) => (
    <TouchableWithoutFeedback style={styles.fontContainer}>
      <Text style={{ fontSize: 20,fontFamily:item?.fontName }}>abcd</Text>
    </TouchableWithoutFeedback>
  );

  const renderSeparator = () => <View style={{ width: 10 }} />;

  return (
    <BottomSheet
      style={{ backgroundColor: "white" }}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      index={-1}
      enableContentPanningGesture={false}
      onClose={() => {
        dispatch(setIsFontStyleSheetOpen(false));
      }}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableWithoutFeedback>
            <MaterialIcons name="format-align-left" size={25} color={"black"} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <MaterialIcons
              name="format-align-center"
              size={25}
              color={"black"}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <MaterialIcons
              name="format-align-right"
              size={25}
              color={"black"}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text style={styles.hText}>H1</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text style={styles.hText}>H2</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text style={styles.hText}>H3</Text>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{ paddingHorizontal: 20, marginTop: 20, paddingVertical: 5 }}
        >
          <FlatList
            data={dataArray}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
          
          <FlatList
            style={{}}
            data={fontDataList}
            renderItem={fontRenderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator
            numColumns={3}
            columnWrapperStyle={{gap:15,paddingHorizontal: 0, marginTop: 20,justifyContent:"center",alignItems:"center"}}
            scrollEnabled={true}
          />

      </View>
    </BottomSheet>
  );
};

export default FontStyleSheet;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    alignItems: "center",
  },
  container: {
    // paddingHorizontal:10
  },
  hText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "gray",
  },
  colorBox: {
    borderColor: "white",
    borderWidth: 2,
    height: 40,
    width: 40,
    borderRadius: 50,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  fontContainer: {
    width: width / 3 - 30,
    height: width / 3 - 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    shadowColor: "black",
    shadowOpacity: 0.56,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    marginBottom:20,
    borderWidth:0.4
  },
});
