import { auth, db } from '../../firebase';

export function loginRequest(email, password) {
	console.log(email, password);
	return auth
		.signInWithEmailAndPassword(email, password)
		.then((user) => user)
		.catch((error) => error);
}

export function logoutRequest() {
	return auth.signOut();
}

export function createNewUser(email, password) {
	return auth
		.createUserWithEmailAndPassword(email, password)
		.then((user) => user)
		.catch((error) => error);
}

export function pushTodoItemRequest(obj) {
	return db.push(obj);
}

export function fetchTodoItemRequest() {
	return db.on('value', (snapshot) => {
		console.log(snapshot.val());
		return snapshot.val();
	});
}
