import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyBF335WUkIQWbD_5oMhxN2O22vHerw1EUc",
    authDomain: "abhayscalelot-aa3f9.firebaseapp.com",
    projectId: "abhayscalelot-aa3f9",
    storageBucket: "abhayscalelot-aa3f9.appspot.com",
    messagingSenderId: "1024630235820",
    appId: "1:1024630235820:web:e635cb5433800f268ab509",
    measurementId: "G-YWKPYE38S0"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);