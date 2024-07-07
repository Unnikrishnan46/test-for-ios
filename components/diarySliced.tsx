import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

type Props = {
  data:any;
};

const DiarySliced = ({data}: Props) => {
  const  router = useRouter();
  const handleDiaryPress = () => {
    router.navigate({ pathname: `(screens)/displayDiary`, params: { id: data.id } });
  };
  return (
    <TouchableOpacity onPress={handleDiaryPress} style={styles.container}>
      <View style={{ borderRightWidth: 1, borderColor: "#D2BFF7" ,paddingRight:10}}>
        <Image
          style={styles.mood}
          source={require("../assets/images/moods/smile1.png")}
        />
        <View style={{ flexDirection: "row", gap: 0, alignItems: "center" }}>
          <View
            style={{ flexDirection: "row", gap: 0, alignItems: "flex-start" }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#4C4262",
                lineHeight: 62,
              }}
            >
              {data?.CurrentDayDetails?.day}
            </Text>
            <Text
              style={{
                lineHeight: 25,
                fontSize: 15,
                color: "#4C4262",
                overflow: "visible",
              }}
            >
              th
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "regular",
              color: "#4C4262",
              fontFamily: "SFProDisplay",
            }}
          >
            {data?.CurrentDayDetails?.monthName}
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontFamily: "SFProDisplay" }}>
        {data?.CurrentDayDetails?.dayOfWeek}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.diaryTitle} numberOfLines={1} ellipsizeMode="tail">
        {data?.title}
        </Text>
        <Text style={styles.diaryBody} numberOfLines={2} ellipsizeMode="tail">
        {data?.body[0]?.itemContent}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DiarySliced;

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: Platform.select({
      ios: 0.1,
      android: 0.5,
    }),
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: Platform.select({
      ios: 5,
      android: 20,
    }),
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    overflow: "hidden",
    gap:10
  },
  mood: {
    height: 40,
    width: 40,
  },
  diaryTitle: {
    fontSize: 25,
    fontFamily: "BadScript",
  },
  diaryBody:{
    fontSize: 17,
    fontFamily: "BadScript",
  }
});
