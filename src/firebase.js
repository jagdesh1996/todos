import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyB18lJAX57sRlCaqY0Sn2DRbkwvvaLbtpk',
	authDomain: 'todos-app-9bed4.firebaseapp.com',
	databaseURL: 'https://todos-app-9bed4-default-rtdb.firebaseio.com',
	projectId: 'todos-app-9bed4',
	storageBucket: 'todos-app-9bed4.appspot.com',
	messagingSenderId: '876626936312',
	appId: '1:876626936312:web:bf88c9bded8d99918cd60d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// get database obj
// const db = firebaseApp.firestore();
// working with auth controls
const auth = firebase.auth();
const db = firebase.database().ref('TodosApp');
const dbItem = firebase.database();

export { db, auth, dbItem };
