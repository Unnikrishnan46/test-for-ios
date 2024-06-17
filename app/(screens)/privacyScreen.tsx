import { StyleSheet, View } from "react-native";
import React from "react";
import SettingsTabWithSwitch from "@/components/settingsTabWithSwitch";
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import SettingsTabWithoutSwitch from "@/components/settingsTabWithoutSwitch";

type Props = {};

const PrivacyScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 10,
          justifyContent: "center",
          alignItems: "center",
          gap:12
        }}
      >
        <SettingsTabWithSwitch title="Enable Password" content="Set your passcode" icon={<Ionicons name="key-outline" size={30} />}/>
        <SettingsTabWithoutSwitch title="Change Password" content="Change your password" icon={<SimpleLineIcons name="lock" size={30}/>}/>
        <SettingsTabWithoutSwitch title="Set Recovery Question" content="Set your recovery question" icon={<MaterialCommunityIcons name="shield-check-outline" size={30}/>}/>
        <SettingsTabWithoutSwitch title="Biometric Authentication" content="Use your biometric info to unlock diary" icon={<Ionicons name="finger-print" size={30}/>}/>

      </View>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F2EDFD"
  },
});
