import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDzcgnnWAh_TzVHaloH2nxySSv14xvM-zA",
	authDomain: "recomind406-88d83.firebaseapp.com",
	projectId: "recomind406-88d83",
	storageBucket: "recomind406-88d83.appspot.com",
	messagingSenderId: "391638838653",
	appId: "1:391638838653:web:2ec33cc2db18756a517014",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
