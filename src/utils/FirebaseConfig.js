
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdMomXC538mwmhUfzMV8WRk9FAM9ER_nc",
  authDomain: "netflix-clone-a2d3c.firebaseapp.com",
  projectId: "netflix-clone-a2d3c",
  storageBucket: "netflix-clone-a2d3c.appspot.com",
  messagingSenderId: "1025520185322",
  appId: "1:1025520185322:web:fb661695626f8c032e0c93"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)