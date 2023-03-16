
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'



const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "daysblog.firebaseapp.com",
  projectId: "daysblog",
  storageBucket: "daysblog.appspot.com",
  messagingSenderId: "713828111503",
  appId: "1:713828111503:web:e1ec769b24948fd1a84cfa",
  measurementId: "G-QWZ7S1400N"
};


// const firebaseConfig = {
//     apiKey: process.env.api_Key,
//     authDomain: process.env.auth_Domain,
//     projectId: process.env.project_Id,
//     storageBucket: process.env.storage_Bucket,
//     messagingSenderId: process.env.messaging_SenderId,
//     appId: process.env.app_Id,
//     measurementId: process.env.measurement_Id
// };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);