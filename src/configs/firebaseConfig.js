import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKiEiwtt95MqhTz16Q1deTgg4tf9ruRBI",
  authDomain: "etoile-fdfa6.firebaseapp.com",
  projectId: "etoile-fdfa6",
  storageBucket: "etoile-fdfa6.appspot.com",
  messagingSenderId: "436971909247",
  appId: "1:436971909247:web:dd9d54764485ad61694f4a",
  measurementId: "G-8T9V3B080M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = analytics(app);
export { db };