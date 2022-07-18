import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp, getApp } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'
import { firebaseApiKey } from '@env'
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth/react-native';

const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: "onmyway-168af.firebaseapp.com",
    projectId: "onmyway-168af",
    storageBucket: "onmyway-168af.appspot.com",
    messagingSenderId: "976356158167",
    appId: "1:976356158167:web:fc4bbbc673a58cac1f9e92",
    measurementId: "G-C1VHM8EREY"
}

const app = initializeApp(firebaseConfig)

const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) })
const db = initializeFirestore(app, { experimentalForceLongPolling: true })

export { db, auth }