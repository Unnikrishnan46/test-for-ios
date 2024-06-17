import { useRouter, useSegments } from "expo-router";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoardContext = React.createContext<any>(null);

export function useOnboard() {
  return React.useContext(OnBoardContext);
}

export function OnboardProvider({ children }: React.PropsWithChildren) {
  const rootSegment = useSegments();
  const router = useRouter();
  const [onBoardSeen, setOnBoardSeen] = React.useState<boolean>(false);

  const checkOnboardingStatus = async () => {
    try {
      const onBoardSeenData = (await AsyncStorage.getItem(
        "inkwellAppData"
      )) as any;
      const parsedData = JSON.parse(onBoardSeenData);
      const onboardSeenStatus = parsedData?.onboardSeen;
      if (!onboardSeenStatus && rootSegment[0] !== "(onboard)") {
        router.replace("/(onboard)/onboard");
      } else if (onboardSeenStatus && rootSegment[0] !== "(app)") {
        router.replace("/");
      }
    } catch (error) {
      console.error("Failed to load onboarding status:", error);
    }
  };

  React.useEffect(() => {
    checkOnboardingStatus();
  }, [onBoardSeen]);

  return (
    <OnBoardContext.Provider
      value={{
        onBoardSeen: onBoardSeen,
        setOnboardSeen: () => {
          setOnBoardSeen(true);
          checkOnboardingStatus();
        },
        setOnBoardUnSeen: () => {
          setOnBoardSeen(false);
          checkOnboardingStatus();
        },
      }}
    >
      {children}
    </OnBoardContext.Provider>
  );
}
