import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsStickersSheetOpen,
  setstickersSheetRef,
} from "@/redux/sheetState";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { stickersDataList } from "@/util/stickersList";
import RBSheet from "react-native-raw-bottom-sheet";
import { setStickerState } from "@/redux/toolBarState";
import { setCurrentContentItemCount, setNewDiaryData } from "@/redux/curdDiaryState";

type Props = {};

const StickersSheet = (props: Props) => {
  const [index, setIndex] = React.useState(0);
  const sheetState = useSelector((state: any) => state.sheetState);
  const layout = useWindowDimensions();
  const refRBSheet = useRef(null) as any;

  const dispatch = useDispatch();

  const newDiaryData = useSelector(
    (state: any) => state.curdDiaryState
  )?.newDiaryData;
  const currentContentItemCount = useSelector(
    (state: any) => state.curdDiaryState
  )?.currentContentItemCount;

  const handleAddFile = (file:any) => {
    if (file) {
      const currentData = newDiaryData;
      const newItem = {
        itemCount: currentContentItemCount + 1,
        itemType: "sticker",
        itemFile: file,
        itemContent:""
      };
      const updatedData = {
        ...currentData,
        body: [...currentData.body, newItem],
      };
      dispatch(setNewDiaryData(updatedData));
      dispatch(setCurrentContentItemCount(currentContentItemCount + 1));
    }
  };

  React.useEffect(() => {
    dispatch(setstickersSheetRef(refRBSheet.current));
  }, [dispatch, refRBSheet]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
    onPress={()=>{
      // dispatch(setStickerState(item));
      handleAddFile(item.fileUri);
      sheetState?.stickersSheetRef?.close();
      dispatch(setIsStickersSheetOpen(false));
    }}
      style={{ justifyContent: "center", alignItems: "center", borderWidth: 0,marginTop:15 }}
    >
      <Image
        style={{ height: 85, width: 85 }}
        source={{ uri: item?.fileUri }}
      />
    </TouchableOpacity>
  );

  const createScene = (stickers: any) => () =>(
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FlatList
            style={{ paddingHorizontal: 9 }}
            data={stickers}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={4}
            columnWrapperStyle={{ gap: 16,rowGap:20 }}
            scrollEnabled
            
          />
        </View>
    );

  const scenes = stickersDataList.reduce((acc: any, item) => {
    acc[item.title] = createScene(item.stickers);
    return acc;
  }, {});

  const routes = stickersDataList.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.tabImageUri,
  }));

  const getTabBarIcon = ({ route, focused }: any) => {
    // const { route } = props;
    const opacity = focused ? 1 : 0.2;
    if (route.key === "tomAndJerry") {
      return (
        <Image style={{ height: 30, width: 30, opacity }} source={route.icon} />
      );
    } else {
      return (
        <Image style={{ height: 30, width: 30, opacity }} source={route.icon} />
      );
    }
  };

  return (
    <RBSheet
        ref={refRBSheet}
        height={Dimensions.get("window").height / 2}
        customStyles={{
          container: {
            backgroundColor: "#fff",
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
        onClose={()=>{dispatch(setIsStickersSheetOpen(false))}}
      >
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap(scenes)}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          inactiveColor="red"
          indicatorStyle={{ backgroundColor: "red" }}
          renderIcon={(props) => getTabBarIcon(props)}
          tabStyle={{ backgroundColor: "white", borderWidth: 0 }}
          labelStyle={{ display: "none" }}
        />
      )}
    />
    </RBSheet>
  );
};

export default StickersSheet;

const styles = StyleSheet.create({
  icon: {},
  iconFocused: {},
  indicator: {},
  tabBar: {},
});
