// import axios from 'axios';
// import { toast } from 'react-toastify';
import {
	USER_LOGGED_ERROR,
	USER_LOGGED_REQUEST,
	USER_LOGGED_SUCCESS,
	USER_LOGGED_OUT,
	PROFILE_DETAIL_REQUEST,
	UPDATE_PROFILE_DETAIL_SUCCESS,
	UPDATE_PROFILE_DETAIL_ERROR,
	USER_ADD_TODO_ITEM,
	FETCH_TODO_ITEM,
	CREATE_USER,
} from './type';

//- action define
export const loginRequestByUser = (email, password) => ({
	type: USER_LOGGED_REQUEST,
	payload: { email, password },
});

export const logoutRequestByUser = () => ({
	type: USER_LOGGED_OUT,
});

export const createNewUser = (email, password) => ({
	type: CREATE_USER,
	payload: { email, password },
});

export const pushTodoItemsRequestByUser = (obj) => ({
	type: USER_ADD_TODO_ITEM,
	payload: obj,
});

export const fetchTodoItemsRequestByUser = () => ({
	type: FETCH_TODO_ITEM,
});
