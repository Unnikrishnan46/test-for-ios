import { StyleSheet, View } from "react-native";
import React from "react";
import GoogleSignInButton from "@/components/googleSignInButton";
import ButtonWithIcon from "@/components/buttonWithIcon";
import { Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import SettingsTabWithSwitch from "@/components/settingsTabWithSwitch";

type Props = {};

const BackUpAndRestoreScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 10,
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
        }}
      >
        <GoogleSignInButton />
        <ButtonWithIcon title="Backup" content="" icon={<Fontisto name="cloud-up" size={30}/>}/>
        <SettingsTabWithSwitch title="Auto Backup" content="" icon={<MaterialIcons name="restore" size={30}/>}/>
        <ButtonWithIcon title="Restore" content="" icon={<MaterialCommunityIcons name="rotate-3d-variant" size={30}/>}/>
      </View>
    </View>
  );
};

export default BackUpAndRestoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2EDFD",
  },
});
