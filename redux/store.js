import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
import reducer from './reducers';

const store = configureStore({
    reducer,
    middleware: [thunk]
}) 

const persistor = persistStore(store)

export {store, persistor}