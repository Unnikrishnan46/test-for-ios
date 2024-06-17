import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SettingsTabWithSwitch from "@/components/settingsTabWithSwitch";
import { AntDesign, EvilIcons, Feather, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import SettingsTabWithoutSwitch from "@/components/settingsTabWithoutSwitch";
import ButtonWithIcon from "@/components/buttonWithIcon";

type Props = {};

const Settings = (props: Props) => {
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
        <View style={{gap:10,width:"100%"}}>
            <Text style={styles.heading}>Settings</Text>
            <SettingsTabWithSwitch content="Show achivement dialog" title="Achivements" icon={<SimpleLineIcons name="trophy" size={25}/>}/>
            <ButtonWithIcon title="Editor Default" content="" icon={<MaterialCommunityIcons name="clipboard-edit-outline" size={25}/>}/>
            <SettingsTabWithoutSwitch title="Privacy" content="Set a diary lock to keep your diary private" icon={<SimpleLineIcons name="lock" size={25}/>}/>
            <ButtonWithIcon title="Reminder" content="" icon={<SimpleLineIcons name="bell" size={25}/>}/>
            <ButtonWithIcon title="Tag Management" content="" icon={<Feather name="hash" size={25}/>}/>
        </View>

        <View style={{gap:10,width:"100%",marginBottom:20}}>
            <Text style={[styles.heading,{marginTop:10}]}>About</Text>
            <ButtonWithIcon title="Contact a developer" content="" icon={<AntDesign name="instagram" size={25}/>}/>
            <ButtonWithIcon title="Recommend" content="" icon={<AntDesign name="sharealt" size={25}/>}/>
            <ButtonWithIcon title="Rate" content="" icon={<EvilIcons name="star" size={25}/>}/>
            <ButtonWithIcon title="Feedback" content="" icon={<MaterialIcons name="chat-bubble-outline" size={25}/>}/>
        </View>
      
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2EDFD",
  },
  heading:{
    fontFamily: "SFPro13",
    fontSize: 20,
    marginBottom:15
  }
});
