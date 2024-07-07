import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type Props = {
  dayAndTimeDetails:any;
}

const DisplayDiaryTop = ({dayAndTimeDetails}: Props) => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.topIconContainer}>
        <TouchableOpacity onPress={()=>{router.navigate("(app)/(tabs)/home")}}><EvilIcons name='close' size={30}/></TouchableOpacity>
        {/* <TouchableOpacity onPress={saveDiaryToFile}><Ionicons name='save-outline' size={30}/></TouchableOpacity> */}
      </View>
      <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between",paddingHorizontal:20,marginTop:15}}>
        <View style={{display:"flex",flexDirection:"column"}}>
          <Text style={{fontFamily:"SFProDisplay",fontSize:20}}>{dayAndTimeDetails?.day} {dayAndTimeDetails?.monthName} {dayAndTimeDetails?.year}</Text>
          <Text style={{fontFamily:"SFProDisplay",fontSize:20}}>{dayAndTimeDetails?.dayOfWeek}  {dayAndTimeDetails?.hours}:{dayAndTimeDetails?.minutes} {dayAndTimeDetails?.ampm}</Text>
        </View>
        <Image style={{height:40,width:40}} source={require("../assets/images/moods/smile1.png")}/>
      </View>
      <View style={{marginTop:20,height:0.5,backgroundColor:"#BFA4F4",width:"80%",alignSelf:"center"}}/>
    </View>
  )
}

export default DisplayDiaryTop

const styles = StyleSheet.create({
    topIconContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20
      }
})