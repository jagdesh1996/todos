import { call, put } from '@redux-saga/core/effects';
import {
	createNewUser,
	fetchTodoItemRequest,
	loginRequest,
	logoutRequest,
	pushTodoItemRequest,
} from './User';

//-- this are all saga generator function, that handle the API call.

export function* handleLogin(action) {
	try {
		const response = yield call(loginRequest, action.payload.email, action.payload.password);
		console.log(response);
		const obj = {
			email: response['user']['email'],
			userId: response['user']['uid'],
		};
		// const data = response['user'];
		yield put({ type: 'USER_LOGGED_SUCCESS', payload: obj });
	} catch (error) {
		console.log(error);
	}
}
export function* handleLogOut(action) {
	try {
		const response = yield call(logoutRequest);
		console.log(response);
		yield put({ type: 'USER_LOGGED_SUCCESS', payload: null });
	} catch (error) {
		console.log(error);
	}
}

export function* handleCreateUser(action) {
	try {
		const response = yield call(createNewUser, action.payload.email, action.payload.password);
		const obj = {
			email: response['user']['email'],
			userId: response['user']['uid'],
		};
		const data = response['user'];
		yield put({ type: 'USER_LOGGED_SUCCESS', payload: obj });
	} catch (error) {
		console.log(error);
	}
}

export function* handlePushTodoItems(action) {
	try {
		const response = yield call(pushTodoItemRequest, action.payload);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}

export function* handleFetchTodoItems(action) {
	try {
		const fetchTodo = yield call(fetchTodoItemRequest);
		console.log(fetchTodo);
		for (let u in fetchTodo) {
			console.log(u);
		}
		yield put({ type: 'FETCH_TODO_ITEMS', payload: fetchTodo });
	} catch (error) {
		console.log(error);
	}
}
