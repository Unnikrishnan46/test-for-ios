import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useDispatch } from "react-redux";
import {
  setIsStickersSheetOpen,
  setstickersSheetRef,
} from "@/redux/sheetState";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { stickersDataList } from "@/util/stickersList";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {};

const StickersSheet = (props: Props) => {
  const snapPoints = useMemo(() => ["40%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setstickersSheetRef(bottomSheetRef.current));
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
      style={{ justifyContent: "center", alignItems: "center", borderWidth: 0 }}
    >
      <Image
        style={{ height: 90, width: 90 }}
        source={{ uri: item?.fileUri }}
      />
    </TouchableOpacity>
  );

  const createScene = (stickers: any) => () =>
    (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          style={{ paddingHorizontal: 9 }}
          data={stickers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4}
          columnWrapperStyle={{ gap: 8 }}
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
      return <Image style={{ height: 30, width: 30,opacity }} source={route.icon} />;
    } else {
      return <Image style={{ height: 30, width: 30,opacity }} source={route.icon} />;
    }
  };

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
        dispatch(setIsStickersSheetOpen(false));
      }}
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
            tabStyle={{backgroundColor:"white",borderWidth:0}}
            labelStyle={{display:"none"}}
          />
        )}
      />
    </BottomSheet>
  );
};

export default StickersSheet;

const styles = StyleSheet.create({
  icon: {},
  iconFocused: {},
  indicator: {},
  tabBar: {},
});
