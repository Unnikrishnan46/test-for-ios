import { ScrollView, StyleSheet,  View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SOTcard from '@/components/SOTcard';
import * as FileSystem from 'expo-file-system';
import { setAllDiariesData } from '@/redux/curdDiaryState';
import DiarySliced from '@/components/diarySliced';

const HomeScreen = () => {
  const themeState = useSelector((state: any) => state.themeState);
  const allDiariesData = useSelector(
    (state: any) => state.curdDiaryState
  )?.allDiariesData;
  const newDiaryData = useSelector(
    (state: any) => state.curdDiaryState
  )?.newDiaryData;
  const currentContentItemCount = useSelector(
    (state: any) => state.curdDiaryState
  )?.currentContentItemCount;

  const dispatch = useDispatch();
  const listAllDiaryFiles = async () => {
    try {
      const files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory as string);
      const diaryFiles = files.filter(file => file.endsWith('.json'));
      return diaryFiles;
    } catch (error) {
      console.error('Error listing diary files:', error);
      return [];
    }
  };

  const loadAllDiaries = async () => {
    try {
      const diaryFiles = await listAllDiaryFiles();
      const allDiaries = await Promise.all(diaryFiles.map(async (file) => {
        const fileUri = FileSystem.documentDirectory + file;
        const jsonString = await FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.UTF8,
        });
        return JSON.parse(jsonString);
      }));
      dispatch(setAllDiariesData(allDiaries));
    } catch (error) {
      console.error('Error loading all diaries:', error);
    }
  };

  useEffect(()=>{
    loadAllDiaries();
  },[newDiaryData,currentContentItemCount]);
  return (
    <ScrollView>
    <View
      style={[
        styles.viewStyle,
        { backgroundColor: themeState?.selectedThemeData?.bodyBgColor, padding:allDiariesData.length < 0 ? 0 : 10,gap:10,justifyContent:allDiariesData.length < 0 ? "center" : "flex-start"},
      ]}
    >
      {allDiariesData.length < 0 && (<SOTcard/>)}
      {allDiariesData.length > 0 && 
      allDiariesData?.map((data:any,index:number)=>(
        <DiarySliced data={data} key={index}/>
      ))
      }
    </View></ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})