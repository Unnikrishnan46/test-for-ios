import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import {
  setFontStyleSheetOpenRef,
  setIsFontStyleSheetOpen,
} from "@/redux/sheetState";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { dataArray } from "@/util/colorList";
import { fontDataList } from "@/util/fontList";
import RBSheet from "react-native-raw-bottom-sheet";

type Props = {};

const width = Dimensions.get("window").width;

const FontStyleSheet = (props: Props) => {
  const dispatch = useDispatch();
  const refRBSheet = useRef(null) as any;

  React.useEffect(() => {
    dispatch(setFontStyleSheetOpenRef(refRBSheet.current));
  }, [dispatch, refRBSheet]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.colorBox,
        { backgroundColor: item?.color, marginBottom: 10 },
      ]}
    />
  );

  const fontRenderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.fontContainer}>
      <Text style={{ fontSize: 20,fontFamily:item?.fontName }}>abcd</Text>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={{ width: 10 }} />;

  return (
    <RBSheet
      ref={refRBSheet}
      height={Dimensions.get("window").height / 2}
      customStyles={{
        container:{
          backgroundColor:"#fff",

        },
        wrapper: {
          backgroundColor: "#00000036",
          
        },
        draggableIcon: {
          backgroundColor: "#000",
        },
      }}
      customModalProps={{
        animationType: "none",
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}
      draggable={true}
      onClose={()=>{dispatch(setIsFontStyleSheetOpen(false))}}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <MaterialIcons name="format-align-left" size={25} color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="format-align-center"
              size={25}
              color={"black"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="format-align-right"
              size={25}
              color={"black"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.hText}>H1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.hText}>H2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.hText}>H3</Text>
          </TouchableOpacity>
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
      </RBSheet>
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
