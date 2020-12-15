import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCrmmBpzJhVgVGWK0TWZZFY46HzGF3OZo8",
  authDomain: "healthcareapp-668f5.firebaseapp.com",
  projectId: "healthcareapp-668f5",
  storageBucket: "healthcareapp-668f5.appspot.com",
  messagingSenderId: "990385039859",
  appId: "1:990385039859:web:6bec5e5a5f7bf4a1640a86"
});
export const auth = firebase.auth();

export default app;
