import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {};

const DiarySliced = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
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
              30
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
            May
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontFamily: "SFProDisplay" }}>
          Thursday
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.diaryTitle} numberOfLines={1} ellipsizeMode="tail">
          What an unforgetable and day in Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate vero non corrupti mollitia! Dolor
          voluptates, error officia ducimus quos qui, impedit optio alias
          praesentium totam repudiandae earum dolorem maiores blanditiis!
        </Text>
        <Text style={styles.diaryBody} numberOfLines={2} ellipsizeMode="tail">
          This morning I woke up at 6 AM. I did some studying. Then around 9 AM
          I made Oatmeal for my Dad. He’s old so he can’t make his own food.
          Someone has to help him. Then around 10:45 AM I sat in front of my
          computer again. I got ready for my 11 AM online class. After my 11 AM
          class, I made a cup of coffee for myself. Then at 12:30 PM, I started
          another class. At 1:45 PM  I was done with my afternoon class. Then I
          took a shower and washed some clothes. After I got out of the shower I
          ate some light snacks. I don’t usually eat lunch if I eat breakfast
          late. 
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
