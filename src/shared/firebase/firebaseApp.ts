import { initializeApp } from "@firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBXtmJOc90xFDPNN_jMQUC6m57jbzpQnCc",
    authDomain: "emarket-a911b.firebaseapp.com",
    projectId: "emarket-a911b",
    storageBucket: "emarket-a911b.firebasestorage.app",
    messagingSenderId: "601088839701",
    appId: "1:601088839701:web:bc39c58301880612f7fe1c",
    measurementId: "G-0Q2HL71ENP"
};

export const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

export const onFirebaseMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("payload", payload)
            resolve(payload);
        });
    });