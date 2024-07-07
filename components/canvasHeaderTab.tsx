import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {

};

const CanvasHeaderTab = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=>{console.log("please");
      }}
        style={{
          width: "50%",
          backgroundColor: "#BFA4F4",
          paddingHorizontal: 20,
          padding: 10,
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
          borderWidth: 0.1,
          borderRightWidth: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "50%",
          backgroundColor: "white",
          paddingHorizontal: 20,
          padding: 10,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          borderWidth: 0.1,
          borderLeftWidth: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Stickers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CanvasHeaderTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "20%",
    marginTop: 15,
  },
});
