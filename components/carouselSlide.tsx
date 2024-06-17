import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
  item: any;
};

const CarouselSlide = ({ item }: Props) => {
  const themeState = useSelector((state: any) => state.themeState);

  return (
    <View style={styles.container}>
      {item?.map((subItem: any, index: number) => (
        <View key={index} style={styles.itemContainer}>
          <Image style={styles.imageStyle} source={subItem.image}/>
          <Text style={styles.itemText}>{subItem?.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default CarouselSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap:10
  },
  itemContainer: {
    gap:15,
    width: "30%",
    height:125,
    margin: "1.5%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    textAlign: "center",
    fontSize: 12,
  },
  imageStyle:{
    height:80,
    width:80
  }
});
