import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    title:string,
    content:string,
    icon:any
};

const SettingsTabWithSwitch = (props: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          padding: 10,
          borderRadius: 10,
        },
        styles.constainer
      ]}
    >
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        <View style={{ justifyContent: "center" }}>
          {props.icon}
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontFamily: "SFPro9", fontSize: 18 }}>
            {props.title}
          </Text>
          {props.content && (
          <Text style={{ fontFamily: "SFProDisplay", fontSize: 14,color:"gray" }}>
            {props.content}
          </Text>
          )}
        </View>
      </View>
      <View>
        <Switch />
      </View>
    </View>
  );
};

export default SettingsTabWithSwitch;

const styles = StyleSheet.create({
  constainer: {
    shadowColor: "black",
    shadowOpacity: Platform.select({
      ios:0.2,
      android:0.56
    }),
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: Platform.select({
      ios:0,
      android:10
    }),
    elevation: 2,
    paddingLeft:15,
    paddingVertical:Platform.select({
      ios:20,
    }),
  },
});
