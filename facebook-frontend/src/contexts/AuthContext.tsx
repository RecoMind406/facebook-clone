import React, {createContext, useContext, useEffect, useState} from 'react'
import {auth, db} from '../../config/firebase'

import {createUserWithEmailAndPassword, updateProfile, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth';

import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

const AuthContext = createContext<any>(null);

export function useAuth() {
  return useContext(AuthContext)
}

function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<any>(localStorage.getItem('currentUser')||null);

  // Các logic và state liên quan đến đăng nhập và đăng xuất
  async function signup (email:any, password:any, name:any, gender:any,birthdate:any) {
    const usersRef = collection(db, "users");
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {displayName:name, photoURL:'https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg'})

    const user = {
      id:userCredential.user.uid,
      email: userCredential.user.email!,
      name: userCredential.user.displayName!,
      password: password,
      gender: gender,
      birthdate: birthdate,
      profilePicture: userCredential.user.photoURL!,
      cover: 'https://i.pinimg.com/originals/4a/88/7e/4a887e68509737452a38ba244079b8a0.jpg',
      friends: [],
      posts: [],
      dialogues: [],
      friendRequestSent: [],
      friendRequestReceived: []
    };
    // await addDoc(collection(db, "users"), user);
    try {
      const newDoc = await addDoc(collection(db, 'users'), user);
      localStorage.setItem('currentUser', JSON.stringify(user));

    } catch(err) {
      console.error("writeToDB failed. reason :", err)
    }
    return getUserData(user.id); 
  }
 
  async function getUserData(userId:any) {
    try {
      const usersRef = collection(db, "users");
      const q = await query(usersRef, where("id", "==", userId));
      const querySnapshot = await getDocs(q);
      const userData=querySnapshot.docs[0].data()
        return userData;
      }
     catch (error) {
      // Handle Firestore query error
      console.log("Error retrieving user data:", error);
      return null;
    }
  }
  
  async function login(email:any, password:any) {

     return signInWithEmailAndPassword(auth ,email, password).then((userCredential) => {
      const userId = userCredential.user.uid;
      return getUserData(userId); // Lấy thông tin người dùng từ collection "users"
    })
    .catch((error) => {
      // Xử lý lỗi đăng nhập
      console.log("Lỗi đăng nhập:", error);
      return null;
    });
  }

  // async function handleLogin(email:any, password:any) {
  //   try {
  //     const userData = await login(email, password);
  //     localStorage.setItem('currentUser', JSON.stringify(userData));
  //     return userData
  //   } catch (error) {
  //     console.log("Lỗi đăng nhập:", error);
  //   }
  // }
  async function handleLogin(email: any, password: any) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      if (userCredential.user) {
        const userId = userCredential.user.uid;
        const userData = await getUserData(userId);
        localStorage.setItem('currentUser', JSON.stringify(userData));
        return userData;
      }
    } catch (error) {
      // Xử lý lỗi đăng nhập
      console.log(error)
      throw error
    }
  }
  

  function logout() {
    localStorage.removeItem('currentUser')
    return auth.signOut()
  }

  function resetPassword(email:any) {
    return sendPasswordResetEmail(auth,email)
  }

  function updatePassword(password:any) {
    updatePassword(password);
  }
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setCurrentUser(userData);
    }
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userData = await getUserData(auth.currentUser?.uid);
        setCurrentUser(userData);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    handleLogin,
    signup,
    logout,
    resetPassword,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


export default AuthProvider