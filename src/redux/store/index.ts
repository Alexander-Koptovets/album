import { combineReducers, configureStore } from '@reduxjs/toolkit'

import usersSlice from '../slice/users';

const rootReducer = combineReducers({
    data: usersSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;