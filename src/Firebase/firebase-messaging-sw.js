

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBF335WUkIQWbD_5oMhxN2O22vHerw1EUc",
  authDomain: "abhayscalelot-aa3f9.firebaseapp.com",
  projectId: "abhayscalelot-aa3f9",
  storageBucket: "abhayscalelot-aa3f9.appspot.com",
  messagingSenderId: "1024630235820",
  appId: "1:1024630235820:web:e635cb5433800f268ab509",
  measurementId: "G-YWKPYE38S0",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.useServiceWorker(
  new ServiceWorker("/firebase-messaging-sw.js", {
    // Change the scope here
    scope: "https://eventopackage.com/",
  })
);

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
