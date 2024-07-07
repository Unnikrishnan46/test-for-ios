import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import DiaryDashboard from '@/components/diaryDashboard';
import MoodStaticsChart from '@/components/moodStaticsChart';
import MoodStaticPieChart from '@/components/moodStaticPieChart';
import BestDayInWeakGraph from '@/components/bestDayInWeakGraph';



const Stats = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{padding:10}}>
        <DiaryDashboard/>
        <Text style={styles.heading}>Mood Statistics All Time</Text>
        <MoodStaticsChart/>
        <Text style={styles.heading}>Mood Statistics All Time</Text>
        <MoodStaticPieChart/>
        <Text style={styles.heading}>Best day in a week</Text>
        <BestDayInWeakGraph/>
        <View style={styles.dailyStatic}>
          <Text>Daily Statistics</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Upgrade Premium</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Stats

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  dailyStatic:{
    padding: 20,
    backgroundColor: "#EDEADE",
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: Platform.select({
      ios: 0.2,
      android: 0.56,
    }),
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    gap:20
  },
  btn:{
    backgroundColor:"#663EB4",
    padding: 15,
    borderRadius: 5,
    justifyContent:"center",
    alignItems:"center"
  },
  btnText:{
    color:"white",
  },
  heading:{
    fontFamily: "SFPro9",
    fontSize: 20,
    // textAlign: "center",
    paddingVertical:15,
    color: "#663EB4",
  }
})