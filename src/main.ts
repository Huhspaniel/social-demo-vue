import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAjd4r3nQ_gYEjI8ZdHZ4rOjKRaqsJQaC8",
  authDomain: "social-demo-18e2f.firebaseapp.com",
  projectId: "social-demo-18e2f",
  storageBucket: "social-demo-18e2f.appspot.com",
  messagingSenderId: "595734416533",
  appId: "1:595734416533:web:6d6f562a2f0e36a6ad1f9c",
  measurementId: "G-N05WPEJSTZ"
};

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
