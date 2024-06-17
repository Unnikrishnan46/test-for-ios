import { Dimensions, Platform, StyleSheet, View } from "react-native";
import React from 'react'
import { BarChart } from "react-native-chart-kit";

const dummyData = [
  { date: "2024-01-01", mood: "happy" },
  { date: "2024-01-02", mood: "happy" },
  { date: "2024-01-03", mood: "neuter" },
  { date: "2024-01-04", mood: "not bad" },
  { date: "2024-01-05", mood: "casual" },
  { date: "2024-01-06", mood: "happy" },
  { date: "2024-01-07", mood: "happy" },
  { date: "2024-01-08", mood: "neuter" },
  { date: "2024-01-09", mood: "not bad" },
  { date: "2024-01-10", mood: "casual" },
  { date: "2024-01-11", mood: "happy" },
  { date: "2024-01-12", mood: "happy" },
  { date: "2024-01-13", mood: "neuter" },
  { date: "2024-01-14", mood: "not bad" },
  { date: "2024-01-15", mood: "casual" },
  { date: "2024-01-16", mood: "happy" },
  { date: "2024-01-17", mood: "happy" },
  { date: "2024-01-18", mood: "neuter" },
  { date: "2024-01-19", mood: "not bad" },
  { date: "2024-01-20", mood: "sad" },
  { date: "2024-01-21", mood: "happy" },
  { date: "2024-01-22", mood: "sad" },
  { date: "2024-01-23", mood: "neuter" },
  { date: "2024-01-24", mood: "not bad" },
  { date: "2024-01-25", mood: "casual" },
  { date: "2024-01-26", mood: "happy" },
  { date: "2024-01-27", mood: "sad" },
  { date: "2024-01-28", mood: "neuter" },
  { date: "2024-01-29", mood: "not bad" },
  { date: "2024-01-30", mood: "casual" },
  { date: "2024-01-31", mood: "happy" },
];

const moodCounts = dummyData.reduce((acc:any, entry) => {
  acc[entry.mood] = (acc[entry.mood] || 0) + 1;
  return acc;
}, {});

const moodData = Object.keys(moodCounts).map((key) => ({
  name: key,
  count: moodCounts[key],
}));


type Props = {}

const BestDayInWeakGraph = (props: Props) => {
  return (
    <View style={styles.container}>
      <BarChart
        data={{
          labels: moodData.map((data) => data.name),
          datasets: [
            {
              data: moodData.map((data) => data.count),
            },
          ],
        }}
        width={Dimensions.get("window").width - 20}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#28B463",
          backgroundGradientFrom: "#EDEADE",
          backgroundGradientTo: "#EDEADE",
          decimalPlaces: 0,
          fillShadowGradient: "#FF6384",
          fillShadowGradientOpacity: 1,
          fillShadowGradientFrom:"#000000",
          fillShadowGradientTo:"#FF6384",
          fillShadowGradientToOpacity:1,
          color: (opacity = 1) => `#EDEADE`,
          labelColor: (opacity = 1) => `#000000`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "0",
            stroke: "#ffa726",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  )
}

export default BestDayInWeakGraph

const styles = StyleSheet.create({
    container: {
        // padding: 20,
        backgroundColor: "#EDEADE",
        // marginTop: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: Platform.select({
          ios: 0.2,
          android: 0.56,
        }),
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 2,
      },
})