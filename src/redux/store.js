// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';

// // const initialState = {
// // contacts: {
// //   items: [],
// // },
// // filters: {
// //   name: "",
// // },};
// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: 'all',
//   },
// };

// const rootReducer = (state = initialState) => {
//   return state;
// };
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  items: contactsReducer,
  filters: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
