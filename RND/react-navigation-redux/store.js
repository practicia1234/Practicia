import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppReducer from './src/Reducers'

const store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk));

export default store;
