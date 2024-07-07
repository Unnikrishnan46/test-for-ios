import { Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAddHashTagSheetRef,
  setIsAddHashTagSheetOpen,
} from "@/redux/sheetState";
import RBSheet from "react-native-raw-bottom-sheet";

type Props = {};

const AddHashTagSheet = (props: Props) => {
  const [tags, setTags] = useState(["Diary", "Journal", "Beautiful Day"]);
  const [newTag, setNewTag] = useState("");
  const refRBSheet = useRef(null) as any;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setAddHashTagSheetRef(refRBSheet.current));
  }, [dispatch, refRBSheet]);

  const handleAddTag = () => {
    if (newTag.trim().length > 0) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  return (
    <RBSheet
      ref={refRBSheet}
      height={Dimensions.get("window").height / 2}
      customStyles={{
        container:{
          backgroundColor:"#fff",

        },
        wrapper: {
          backgroundColor: "#00000036",
          
        },
        draggableIcon: {
          backgroundColor: "#000",
        },
      }}
      customModalProps={{
        animationType: "none",
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: true,
      }}
      draggable={true}
      onClose={()=>{dispatch(setIsAddHashTagSheetOpen(false))}}
    >
      <ScrollView style={{paddingBottom:20}}>
      <View style={{paddingHorizontal:20,paddingBottom:Platform.select({ios:20,android:10})}}>
        <Text style={{fontSize:30,fontFamily:"SFPro"}}>Select an existing tag or add new tags</Text>
      </View>
      
      <View style={styles.conatiner}>
        {tags?.map((item, index) => (
          <TouchableOpacity key={index} style={styles.tagContainer}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}

        <TextInput
          style={styles.textInput}
          placeholder="Add new tag"
          value={newTag}
          onChangeText={setNewTag}
          onSubmitEditing={handleAddTag}
        />
      </View>
      </ScrollView>
      </RBSheet>
  );
};

export default AddHashTagSheet;

const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tagContainer: {
    borderRadius: 15,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundColor: "#E5DBFB",
    paddingVertical: 10,
  },
  textInput: {
    backgroundColor: "#F9F6EE",
    width: "50%",
    padding: 10,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
});
