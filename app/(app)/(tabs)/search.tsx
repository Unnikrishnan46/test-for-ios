import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noSearchContainer}>
        <MaterialCommunityIcons name='text-box-search-outline' color={"#E5DBFB"} size={50}/>
        <Text style={{fontSize:20,fontWeight:"300",color:"gray",flexShrink: 1}}>
          Not every searcher can find but those who find are searchers
        </Text>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F2EDFD",
    paddingHorizontal:20
  },
  noSearchContainer:{
    backgroundColor:"white",
    justifyContent:"space-between",
    alignItems:"center",
    gap:10,
    paddingHorizontal:10,
    paddingVertical:20,
    flexDirection:"row",
    borderRadius: 16,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    marginTop:20
  }
})