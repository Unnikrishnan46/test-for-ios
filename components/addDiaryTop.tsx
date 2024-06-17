import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type Props = {}

const AddDiaryTop = (props: Props) => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.topIconContainer}>
        <TouchableWithoutFeedback onPress={()=>{router.navigate("/")}}><EvilIcons name='close' size={30}/></TouchableWithoutFeedback>
        
        <Ionicons name='save-outline' size={30}/>
      </View>
      <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between",paddingHorizontal:20,marginTop:15}}>
        <View style={{display:"flex",flexDirection:"column"}}>
          <Text style={{fontFamily:"SFProDisplay",fontSize:20}}>31 May 2024</Text>
          <Text style={{fontFamily:"SFProDisplay",fontSize:20}}>Friday  15:40 PM</Text>
        </View>
        <Image style={{height:40,width:40}} source={require("../assets/images/moods/smile1.png")}/>
      </View>
      <View style={{marginTop:20,height:0.5,backgroundColor:"#BFA4F4",width:"80%",alignSelf:"center"}}/>
    </View>
  )
}

export default AddDiaryTop

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