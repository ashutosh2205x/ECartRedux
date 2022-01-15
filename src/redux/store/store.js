import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducer from '../reducers';
import thunk, {ThunkMiddleware} from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export {store, persistor};
