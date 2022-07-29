import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDP74GqSNfQTHhxDKqylm5dtzNoXpc6e7o",
  authDomain: "auth-e73ac.firebaseapp.com",
  projectId: "auth-e73ac",
  storageBucket: "auth-e73ac.appspot.com",
  messagingSenderId: "791588356028",
  appId: "1:791588356028:web:7166ded52db2dbab8835b9"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);