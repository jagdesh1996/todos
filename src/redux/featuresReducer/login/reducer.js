const { USER_LOGGED_SUCCESS, FETCH_TODO_ITEMS } = require('./type');

const initialState = {
	user: {},
	loading: false,
	error: '',
	logged: false,
};

export const loggedReduce = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGGED_SUCCESS:
			console.log(action.payload);
			return {
				error: null,
				loading: false,
				user: action.payload, //-- storing the user data in single object
			};
		default:
			return state;
	}
};

export const todosReducer = (state = [{}], action) => {
	switch (action.type) {
		case FETCH_TODO_ITEMS:
			console.log(action.payload);
			return {
				error: null,
				loading: false,
				items: action.payload,
			};
		default:
			return state;
	}
};
