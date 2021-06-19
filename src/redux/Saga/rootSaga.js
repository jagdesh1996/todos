import { takeLatest, all } from '@redux-saga/core/effects';
import {
	handleCreateUser,
	handleFetchTodoItems,
	handleLogin,
	handleLogOut,
	handlePushTodoItems,
} from './HandleOperation';
import {
	CREATE_USER,
	FETCH_TODO_ITEM,
	USER_ADD_TODO_ITEM,
	USER_LOGGED_OUT,
	USER_LOGGED_REQUEST,
} from '../featuresReducer/login/type';

export function* sagaLogin() {
	yield takeLatest(USER_LOGGED_REQUEST, handleLogin);
}

export function* sagaLogOut() {
	yield takeLatest(USER_LOGGED_OUT, handleLogOut);
}

export function* sagaCreateUser() {
	yield takeLatest(CREATE_USER, handleCreateUser);
}

export function* sagaPushTodo() {
	yield takeLatest(USER_ADD_TODO_ITEM, handlePushTodoItems);
}

export function* sagaFetchTodo() {
	yield takeLatest(FETCH_TODO_ITEM, handleFetchTodoItems);
}

//-- root redux-saga
export function* rootSaga() {
	yield all([sagaLogin(), sagaLogOut(), sagaPushTodo(), sagaFetchTodo(), sagaCreateUser()]);
}
