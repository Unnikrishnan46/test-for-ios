import { AntDesign } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ScreenEntry() {
  const themeState = useSelector((state: any) => state.themeState);
  const navigation = useNavigation();
  return (
    <Stack
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="premium"
        options={{
          headerShown: true,
          title: "Premium Membership",
          headerStyle: {
            backgroundColor: themeState?.selectedThemeData?.topBarBg,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.closeBtn}
            >
              <AntDesign name="close" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="canvasScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="privacyScreen"
        options={{
          headerShown: true,
          title: "Privacy",
          headerStyle: {
            backgroundColor: themeState?.selectedThemeData?.topBarBg,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.closeBtn}
            >
              <AntDesign name="close" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="backUpAndRestoreScreen"
        options={{
          headerShown: true,
          title: "Back Up & Restore",
          headerStyle: {
            backgroundColor: themeState?.selectedThemeData?.topBarBg,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.closeBtn}
            >
              <AntDesign name="close" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="exportScreen"
        options={{
          headerShown: true,
          title: "Export",
          headerStyle: {
            backgroundColor: themeState?.selectedThemeData?.topBarBg,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.closeBtn}
            >
              <AntDesign name="close" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="settings"
        options={{
          headerShown: true,
          title: "Settings",
          headerStyle: {
            backgroundColor: themeState?.selectedThemeData?.topBarBg,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.closeBtn}
            >
              <AntDesign name="close" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="passwordScreen"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: themeState?.selectedThemeData?.topBarBg,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.closeBtn}
            >
              <AntDesign name="close" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="guideScreen"
        options={{
          animation: "slide_from_right",
          headerShown: true,
          title: "Guided writting",
          headerStyle: {
            backgroundColor: themeState?.selectedThemeData?.topBarBg,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.closeBtn}
            >
              <AntDesign name="close" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="themesSelectionScreen"
        options={{
          animation: "slide_from_right",
          headerShown: false,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  closeBtn: {
    padding: 5,
    backgroundColor: "#60527A",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
