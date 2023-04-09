
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXe7qqrLD0-ZnmVw8VnX7Y3_pMuKfPTk0",
  authDomain: "jobi-4e4c4.firebaseapp.com",
  projectId: "jobi-4e4c4",
  storageBucket: "jobi-4e4c4.appspot.com",
  messagingSenderId: "801618691311",
  appId: "1:801618691311:web:ead0eb3cabd4b1a693471a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

export default firebase;
// export default auth;