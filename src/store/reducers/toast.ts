import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import uuid from 'react-native-uuid';

export type ToastTypes =  'info' | 'error'

interface ShowToastPayload {
  id?: string
  type: ToastTypes
  description: string
}

const initialState: ShowToastPayload = {
  id: '',
  description: '',
  type: 'info'
};

const toastReactPrime = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<ShowToastPayload>) {
      state.id = uuid.v4() as string;
      state.type = action.payload.type;
      state.description = action.payload.description;
    },
    closeToast: (state, _) => {
      state.id = '';
    },
  },
});

export const { showToast, closeToast } = toastReactPrime.actions;
export default toastReactPrime.reducer;
