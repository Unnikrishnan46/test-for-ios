import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import SettingsTabWithSwitch from "@/components/settingsTabWithSwitch";
import { EvilIcons } from "@expo/vector-icons";
import { router } from "expo-router";


type Props = {};

const ExportScreen = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 15,
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View style={styles.exportPeriodContainer}>
          <Text style={styles.sectionHeading}>Export Period</Text>
          <RadioButton.Group
            onValueChange={(value) => setSelectedValue(value)}
            value={selectedValue}
          >
            <View style={styles.radioContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="option1"
                  color="black"
                  uncheckedColor="red"
                />
                <Text style={styles.optionText}>All entries</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="option2" color="black" />
                <Text style={styles.optionText}>Last 7 days</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="option3" color="black" />
                <Text style={styles.optionText}>Last 30 days</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="option4" color="black" />
                <Text style={styles.optionText}>This month</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="option5" color="black" />
                <Text style={styles.optionText}>Custom Selection</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.exportPeriodContainer}>
          <Text style={styles.sectionHeading}>Export Format</Text>
          <RadioButton.Group
            onValueChange={(value) => setSelectedValue(value)}
            value={selectedValue}
          >
            <View style={styles.radioContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="option1"
                  color="black"
                  uncheckedColor="red"
                />
                <Text style={styles.optionText}>TXT</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="option2" color="black" />
                <Text style={styles.optionText}>PDF</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.exportPeriodContainer}>
          <Text style={styles.sectionHeading}>Watermark</Text>
          <SettingsTabWithSwitch
            title="Remove Watermark"
            content=""
            icon={<EvilIcons name="trash" size={30} />}
          />
        </View>
        <View style={{width:"100%",marginBottom:20}}>
          <TouchableOpacity onPress={()=>{router.navigate("(screens)/guideScreen")}} style={styles.btnStyle}>
            <Text style={[{color:"white"},styles.optionText]}>Export</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2EDFD",
  },
  exportPeriodContainer: {
    backgroundColor: "white",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
    paddingLeft: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: Platform.select({
      ios: 0.2,
      android: 0.56,
    }),
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    gap: 20,
  },
  sectionHeading: {
    fontFamily: "SFPro3",
    fontSize: 20,
    marginLeft: 10,
  },
  optionText: {
    fontFamily: "SFPro9",
    fontSize: 15,
  },
  radioContainer: {
    gap: 10,
  },
  btnStyle:{
    backgroundColor:"#663EB4",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    borderRadius: 10,
    padding: 15,
  }
});
