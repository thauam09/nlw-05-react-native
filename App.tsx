import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import * as Notifications from "expo-notifications";

import Routes from "./src/routes";
import { PlantProps } from "./src/libs/storage";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    // Ouvindo notificações
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async (notification) => {
    //     const data = notification.request.content.data.plant as PlantProps;
    //     console.log(data);
    //   }
    // );

    // return () => subscription.remove();

    async function notifications() {
      //Deletar todas as notificações agendadas
      // await Notifications.cancelAllScheduledNotificationsAsync();

      //Consultar todas as notificaçõe agendadas
      const data = await Notifications.getAllScheduledNotificationsAsync();
      console.log(data);
    }

    notifications();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
