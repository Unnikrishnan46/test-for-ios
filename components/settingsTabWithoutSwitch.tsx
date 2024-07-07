import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';


type Props = {
    title:string,
    content:string,
    icon:any
};


const SettingsTabWithoutSwitch = (props: Props) => {
  return (
    <TouchableOpacity
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
        <View>
          <Text style={{ fontFamily: "SFPro9", fontSize: 18 }}>
            {props.title}
          </Text>
          {props.content && (
          <Text style={{ fontFamily: "SFProDisplay", fontSize: 14,color:"gray" }}>
            {props.content}
          </Text>)}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SettingsTabWithoutSwitch

const styles = StyleSheet.create({
    constainer: {
        shadowColor: "black",
        shadowOpacity: Platform.select({
          ios:0.2,
          android:0.56
        }),
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 2,
        paddingLeft:15,
        paddingVertical:Platform.select({
          ios:20,
        }),
      },
})