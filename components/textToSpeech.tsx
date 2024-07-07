import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Voice from "@react-native-voice/voice";

type Props = {};

const TextToSpeech = (props: Props) => {
  const [results, setResults] = useState<any>([]);  
  const isText2SpeechTabOpen = useSelector(
    (state: any) => state.sheetState
  ).isText2SpeechTabOpen;

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStartHandler = (e: any) => {
    try {
      console.log(e?.value);
    } catch (error) {
      console.log("onSpeechStartHandler error  :  ", error);
    }
  };

  const onSpeechEndHandler = (e: any) => {
    // console.log(e);
  };

  const onSpeechResultsHandler = (e: any) => {
    try {
      console.log(e);
      setResults(e?.value);
    } catch (error) {
      console.log("onSpeechResultsHandler error  :  ", error);
    }
  };

  const startRecognizing = async () => {
    try {
      await Voice.start("en-US");
    } catch (error) {
      console.log(" suii", error);
    }
  };

  const stopRecognizing = async () => {};

  useEffect(() => {
    if (isText2SpeechTabOpen) {
      startRecognizing();
    }
  }, [isText2SpeechTabOpen]);

  return (
    <View
      style={[
        styles.text2SpeechContainer,
        { display: !isText2SpeechTabOpen ? "none" : "flex" },
      ]}
    >
      <Text style={{ color: "gray" }}>Say something ...</Text>
      <Text>.......</Text>
    </View>
  );
};

export default TextToSpeech;

const styles = StyleSheet.create({
  text2SpeechContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    position: "absolute",
    height: 60,
    width: "100%",
    zIndex: 1,
    bottom: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
});
