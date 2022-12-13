
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAoYIi82B-1Uu4SDNHQ-zYODRcWMPhRhM0",
    authDomain: "bright-commerce-d9f4f.firebaseapp.com",
    projectId: "bright-commerce-d9f4f",
    storageBucket: "bright-commerce-d9f4f.appspot.com",
    messagingSenderId: "753376847217",
    appId: "1:753376847217:web:13a31c451a1b1b466cc2d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;