import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firbaseConfig = {
    apiKey: 'AIzaSyBHpRnyeMJyK6EjjtcVUenSxB2jSy0RSxo',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  const app = initializeApp(firbaseConfig)

  export const auth = getAuth(app)
  export default app