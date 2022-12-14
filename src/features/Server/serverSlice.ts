/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
// import { getPhotos } from '../../api/photo';
// import { AppDispatch, RootState } from '../../app/store';
// import { Photo } from '../../type/Photo';

export interface ServerState {
  storage: any[];
  statusLoading: 'idle' | 'loading' | 'failed';
}

const initialState: ServerState = {
  storage: [],
  statusLoading: 'idle',
};

export const getToServerAsync = createAsyncThunk(
  'server/fetchPhotos',
  async () => {

  },
);

const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    add: () => {
    },
    setStatusLoading: () => {

    },
    setError: () => {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToServerAsync.pending, (state) => {
        state.statusLoading = 'loading';
      })
      .addCase(getToServerAsync.fulfilled, (state) => {
        state.statusLoading = 'idle';
      })
      .addCase(getToServerAsync.rejected, (state) => {
        state.statusLoading = 'failed';
      });
  },
});

export default serverSlice.reducer;
export const {
  add,
  setStatusLoading,
  setError,
} = serverSlice.actions;

// export const selectServerStorage = (state: RootState) => state.server.storage;
// export const selectServerStatusLoading = (state: RootState) => state.server.statusLoading;
// export const selectError = (state: RootState) => state.server.error;
// export const selectRandomDelay = (state: RootState) => state.server.randomDelayLoading;

// export const loadDataOnServer = (dispatch: AppDispatch) => {
//   try {
//     dispatch(getToServerAsync({page: 10, limit: 100}));
//   } catch (error) {
//     dispatch(setError(error));
//   }
// }
