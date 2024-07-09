import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBppZXoctVyx7fv0ey3toSlMMgGQ1-z-pA",
    authDomain: "post-app-96f29.firebaseapp.com",
    projectId: "post-app-96f29",
    storageBucket: "post-app-96f29.appspot.com",
    messagingSenderId: "22762910754",
    appId: "1:22762910754:web:e6d8bdb35d2c5f800bc67b",
    measurementId: "G-MCS5E0MQX0"
};
  
const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')