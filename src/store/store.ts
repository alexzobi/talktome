import thunk from 'redux-thunk';
import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import rootReducer from '../data/modules'; // where reducers is an object of reducers

const middleware = [thunk];
// TODO: this should be broken down based on environment to reduce overhead for
// production app

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareList = composeEnhancers(applyMiddleware(...middleware));

const storage = createSensitiveStorage({
  keychainService: 'talkToMeKeychainService',
  sharedPreferencesName: 'talkToMeSharedPreferences',
});

const config = {
  key: 'root',
  storage,
};

const persistRootReducer = persistReducer(config, rootReducer);

export const store = createStore(persistRootReducer, middlewareList);
export const persistor = persistStore(store);
