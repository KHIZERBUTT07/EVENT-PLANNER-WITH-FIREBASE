import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth ,
   onAuthStateChanged ,
   createUserWithEmailAndPassword ,
   
 } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { 
  getFirestore ,
  doc ,
  setDoc ,


 } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getStorage ,
  ref ,
  uploadBytes ,
  getDownloadURL ,

} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCS6IcokYqV2wbIEkWgNcQcauO93qotOzs",
  authDomain: "my-first-website-40f76.firebaseapp.com",
  projectId: "my-first-website-40f76",
  storageBucket: "my-first-website-40f76.appspot.com",
  messagingSenderId: "171137188691",
  appId: "1:171137188691:web:b15a81ddda10b71e4f97a6",
  measurementId: "G-VDMBMVNYCV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth ,
  db , 
  storage , 
  onAuthStateChanged , 
  createUserWithEmailAndPassword ,
  doc , 
  setDoc ,
  ref ,
  uploadBytes ,
  getDownloadURL ,

    };