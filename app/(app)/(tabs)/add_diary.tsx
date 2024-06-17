import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AddDiaryTop from "@/components/addDiaryTop";
import DiaryToolBar from "@/components/diaryToolBar";
import { useNavigation } from "expo-router";
const statusBarHeight = StatusBar.currentHeight;

const AddDiary = () => {
  const selectedTheme = useSelector(
    (state: any) => state.themeState
  ).selectedThemeData;

  const navigation = useNavigation();
navigation.canGoBack();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: selectedTheme?.bodyBgColor },
      ]}
    >
      <View>
        <AddDiaryTop />
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 20,
            marginTop: 10,
            gap: 10,
          }}
        >
          <TextInput
            style={{
              fontSize: 30,
              fontFamily: "SFProDisplay",
              fontWeight: "ultralight",
              textAlignVertical: "top",
            }}
            placeholder="Title"
            placeholderTextColor={"#9983C3"}
            multiline={true}
          />
          <TextInput
            style={{
              fontSize: 25,
              fontFamily: "SFProDisplay",
              textAlignVertical: "top",
            }}
            placeholder="Dear Diary..."
            placeholderTextColor={"#9983C3"}
            multiline={true}
          />
        </View>
      </View>
      <DiaryToolBar/>
    </SafeAreaView>
  );
};

export default AddDiary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({
      ios: 0,
      android: statusBarHeight,
    }),
    justifyContent:"space-between"
  },
});
