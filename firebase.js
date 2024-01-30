//ESTO ES COPIADO
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAX5LTSvXvmtk-ANLmNOT0ENT2Z9eFJxz8",

  authDomain: "fir-crud-firestore-dc1a8.firebaseapp.com",

  projectId: "fir-crud-firestore-dc1a8",

  storageBucket: "fir-crud-firestore-dc1a8.appspot.com",

  messagingSenderId: "677647522581",

  appId: "1:677647522581:web:267848e9c1d082373a671c",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) => {
  updateDoc(doc(db, "tasks", id), newFields);
};
