import React from "react";
import AllRoutes from "./routes/allRoutes";
import LanguageProvider from "./Common/LanguageSelector/LanguageSelector";
import enTranslationMessages from "./Common/translations/en.json";
import hiTranslationMessages from "./Common/translations/hi.json";
import grTranslationMessages from "./Common/translations/gr.json";
import thTranslationMessages from "./Common/translations/th.json";
import frTranslationMessages from "./Common/translations/fr.json";
import chTranslationMessages from "./Common/translations/ch.json";
import "swiper/css";
import "swiper/css/navigation";
import { messaging } from "./Firebase/Firebase";
import { useEffect } from "react";
import { getMessaging, getToken } from "@firebase/messaging";

const App = () => {

  const requestPermission = async () => {
    const permission = await Notification.requestPermission()
    if (permission === "granted") {
      const messaging = getMessaging();
      const token = await getToken(messaging, { vapidKey: 'BBlegBLqkpqqV_wjtAsyb6ILLJc6od9N8GEz6yl8M3WcV5Tb9gxBgc7eAxlepeZYAKnHqQp1gZLePLTojrQ-kKo' }).then((currentToken) => {
        if (currentToken) {
          // console.log('currentToken', currentToken)
          localStorage.setItem("fcmToken", currentToken)
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        // console.log('An error occurred while retrieving token. ', err);
      });

    } else if (permission === "denied") {
      alert("Plese turn on Notiofication Permission First")
      // console.log("You denied for Notification")
    }
  }

  useEffect(() => {
    requestPermission()

  }, [])

  document.querySelector("body")?.classList.add("app");
  return (
    <React.Fragment>
      <LanguageProvider
        messages={{
          en: enTranslationMessages,
          hi: hiTranslationMessages,
          gr: grTranslationMessages,
          th: thTranslationMessages,
          fr: frTranslationMessages,
          ch: chTranslationMessages,
        }}
      >
        <AllRoutes />
      </LanguageProvider>
    </React.Fragment>
  );
};

export default App;
