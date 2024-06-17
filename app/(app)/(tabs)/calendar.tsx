import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Calendar, DateData } from "react-native-calendars";
import { useDispatch, useSelector } from "react-redux";
import { formatDate, getMonthAndYear } from "@/util/utils";
import DiarySliced from "@/components/diarySliced";
import { setCurrentSelectedMonth } from "@/redux/calendarState";

const CalendarScreen = () => {
  const [currentDay, setCurrentDay] = useState(formatDate(new Date()));
  const [selectedDay,setSelectedDay] = useState(formatDate(new Date()));
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (state: any) => state.themeState
  ).selectedThemeData;

  const handleMonthChange = (date: DateData) => {
    dispatch(setCurrentSelectedMonth(getMonthAndYear(new Date(date.dateString))))
  };

  const marked = {
    [selectedDay]: { 
      marked: true ,
      selected: true,
      selectedColor: selectedTheme?.calendarSelectedDayBG,
      selectedTextColor: 'black',
      dotColor: 'transparent'
    },
    [currentDay]: {
      selected: true,
      selectedColor: selectedTheme?.calendarCurrentBG,
      selectedTextColor: "#ffff",
    },
  };

  const handleDayPress = (date:DateData)=>{
    setSelectedDay(date.dateString);
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: selectedTheme?.bodyBgColor },
      ]}
    >
      <Calendar
        hideArrows={true}
        hideExtraDays={true}
        theme={{
          calendarBackground: selectedTheme?.bodyBgColor,
          dayTextColor: selectedTheme?.addDiaryBtnBg,
        }}
        customHeaderTitle={<View></View>}
        onMonthChange={(date) => {
          handleMonthChange(date);
        }}
        markedDates={marked}
        enableSwipeMonths={true}
        onDayPress={(date)=>{handleDayPress(date)}}
      />
      <View style={{width:"100%",paddingHorizontal:10}}>
      <DiarySliced/>
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
