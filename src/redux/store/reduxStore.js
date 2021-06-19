import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { loggedReduce, todosReducer } from '../featuresReducer/login/reducer';
import { rootSaga } from '../Saga/rootSaga';

const rootReducer = combineReducers({
	userLog: loggedReduce,
	todosReducer: todosReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
