
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBXE3VwwasVhTaDniURqQSKJ4Q_q1PsrjQ",
    authDomain: "ecommerce-tech-cc91b.firebaseapp.com",
    projectId: "ecommerce-tech-cc91b",
    storageBucket: "ecommerce-tech-cc91b.appspot.com",
    messagingSenderId: "1068527165208",
    appId: "1:1068527165208:web:5a1b7b88b343025af6c86d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)