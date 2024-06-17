import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type Props = {

};

const CanvasHeaderTab = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
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
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
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
      </TouchableWithoutFeedback>
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
