import { initializeApp } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'
import { firebaseApiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } from '@env'

const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
}

const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, { experimentalForceLongPolling: true })

export { db }