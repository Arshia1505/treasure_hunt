// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCaESVnbrlIbJYQ8-jddPy9BIuJCxY3HD8",
//   authDomain: "treasurehunt-c1ef0.firebaseapp.com",
//   projectId: "treasurehunt-c1ef0",
//   // storageBucket: "treasurehunt-c1ef0.firebasestorage.app",
//   storageBucket: "treasurehunt-c1ef0.appspot.com",

//   messagingSenderId: "976003041251",
//   appId: "1:976003041251:web:674a042d62cef58f5ac2d6",
//   measurementId: "G-0JVZ9BFYD9"
// };

// //Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // const auth = getAuth(app);

// // export { auth };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get the authentication instance
// const auth = getAuth(app);

// export { auth };

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: "AIzaSyCaESVnbrlIbJYQ8-jddPy9BIuJCxY3HD8",
  // authDomain: "treasurehunt-c1ef0.firebaseapp.com",
  // projectId: "treasurehunt-c1ef0",
  // storageBucket: "treasurehunt-c1ef0.appspot.com", // ✅ FIXED
  // messagingSenderId: "976003041251",
  // appId: "1:976003041251:web:674a042d62cef58f5ac2d6",
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,  
  measurementId: "G-0JVZ9BFYD9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
