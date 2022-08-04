import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBruRWRJvn10p8VetxtJ8Mx7uMoOaTZKvU",
  authDomain: "netflix-b746b.firebaseapp.com",
  projectId: "netflix-b746b",
  storageBucket: "netflix-b746b.appspot.com",
  messagingSenderId: "628292088892",
  appId: "1:628292088892:web:3f5b2a7843b5dc7b72bf39",
  measurementId: "G-KMDK7LK8HM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
/*
"site": "fiber-port",
firebase deploy --only hosting:fiber-port
*/
