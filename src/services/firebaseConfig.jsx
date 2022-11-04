import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDpaOkwK6Uh2dlLADNkxRVeSuypG0SWuA4',
	authDomain: 'react-coder-ag.firebaseapp.com',
	projectId: 'react-coder-ag',
	storageBucket: 'react-coder-ag.appspot.com',
	messagingSenderId: '481535761412',
	appId: '1:481535761412:web:09f22bcd7d51a5d4166951',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
