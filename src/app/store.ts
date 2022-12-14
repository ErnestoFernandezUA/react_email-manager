import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import serverReducer from '../features/Server/serverSlice';

export const store = configureStore({
  reducer: {
    server: serverReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
