import { Dimensions, Platform, StyleSheet, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";

type Props = {};

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

const moodCounts = dummyData.reduce((acc: any, entry) => {
  acc[entry.mood] = (acc[entry.mood] || 0) + 1;
  return acc;
}, {});

const moodData = Object.keys(moodCounts).map((key, index) => ({
  name: key,
  count: moodCounts[key],
  color: ["#FF6384", "#36A2EB", "#FFCE56", "#FF9F40", "#4BC0C0"][index % 5],
  legendFontColor: "#7F7F7F",
  legendFontSize: 15,
}));

const MoodStaticPieChart = (props: Props) => {
  return (
    <View style={styles.container}>
      <PieChart
        data={moodData.map(
          ({ name, count, color, legendFontColor, legendFontSize }) => ({
            name,
            population: count,
            color,
            legendFontColor,
            legendFontSize,
          })
        )}
        width={Dimensions.get("window").width - 20}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default MoodStaticPieChart;

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
});
