import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

type Props = {};

const GoogleSignInButton = (props: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity
    onPress={()=>{router.navigate("(screens)/passwordScreen")}}
      style={[
        {
          backgroundColor: "white",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          padding: 10,
          borderRadius: 10,
        },
        styles.constainer,
      ]}
    >
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        <View style={{ justifyContent: "center" }}>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/icons/googleLogo.png")}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontFamily: "SFPro9", fontSize: 16 }}>
            Sign-in with your Google Account
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;

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
    paddingLeft: 15,
  },
});
