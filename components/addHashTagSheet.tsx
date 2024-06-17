import { Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useDispatch } from "react-redux";
import {
  setAddHashTagSheetRef,
  setIsAddHashTagSheetOpen,
} from "@/redux/sheetState";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type Props = {};

const AddHashTagSheet = (props: Props) => {
  const snapPoints = useMemo(() => ["30%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [tags, setTags] = useState(["Diary", "Journal", "Beautiful Day"]);
  const [newTag, setNewTag] = useState("");

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setAddHashTagSheetRef(bottomSheetRef.current));
  }, [dispatch, bottomSheetRef]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const handleAddTag = () => {
    if (newTag.trim().length > 0) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  return (
    <BottomSheet
      style={{ backgroundColor: "white" }}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      index={-1}
      enableContentPanningGesture={false}
      onClose={() => {
        dispatch(setIsAddHashTagSheetOpen(false));
      }}
    >
      <ScrollView style={{paddingBottom:20}}>
      <View style={{paddingHorizontal:20,paddingBottom:Platform.select({ios:20,android:10})}}>
        <Text style={{fontSize:30,fontFamily:"SFPro"}}>Select an existing tag or add new tags</Text>
      </View>
      
      <View style={styles.conatiner}>
        {tags?.map((item, index) => (
          <TouchableWithoutFeedback key={index} style={styles.tagContainer}>
            <Text>{item}</Text>
          </TouchableWithoutFeedback>
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
    </BottomSheet>
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
