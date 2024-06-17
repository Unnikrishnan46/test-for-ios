import {
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import { useRouter, useNavigation } from "expo-router";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

type Props = {
  callUndo: any;
  callRedo: any;
  previousRoute: string | any;
};

const CanvasScreenHeader = ({ callUndo, callRedo, previousRoute }: Props) => {
  const router = useRouter();
  const navigation = useNavigation();

  // router.navigate("(tabs)/add_diary")
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          router.navigate(previousRoute);
        }}
        style={{
          borderRadius: 15,
          backgroundColor: "#60527A",
          height: 30,
          width: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="close" size={20} color={"white"} />
      </TouchableWithoutFeedback>
      <View style={styles.rightIconContainer}>
        <View style={styles.undoReduContainer}>
          <TouchableOpacity
            onPress={() => {
              callUndo();
            }}
          >
            <EvilIcons name="undo" size={40} />
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPress={() => {
              callRedo();
            }}
          >
            <EvilIcons name="redo" size={40} />
          </TouchableWithoutFeedback>
        </View>
        <Feather name="save" size={30} />
      </View>
    </View>
  );
};

export default CanvasScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  undoReduContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rightIconContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
