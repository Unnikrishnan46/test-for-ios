import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import SOTcard from '@/components/SOTcard';

const HomeScreen = () => {
  const themeState = useSelector((state: any) => state.themeState);
  return (
    <View
      style={[
        styles.viewStyle,
        { backgroundColor: themeState?.selectedThemeData?.bodyBgColor },
      ]}
    >
      <SOTcard/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})