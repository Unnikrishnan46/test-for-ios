import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type Props = {};

const StatsScreenHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableWithoutFeedback onPress={()=>{router.navigate("/")}}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default StatsScreenHeader;

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:20,
  },
  container:{
    flexDirection:"row"
  }
});
