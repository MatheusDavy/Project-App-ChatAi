import { i18n } from '@/src/translations';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ToastTypes =  'info' | 'error'

interface SetLanguagePayload {
  code: string,
}

const initialState: SetLanguagePayload = {
  code: 'pt',
};

const toastReactPrime = createSlice({
  name: 'select-language',
  initialState,
  reducers: {
    setCurrentLanguage(state, action: PayloadAction<SetLanguagePayload>) {
      state.code = action.payload.code
    },
  },
});

export const { setCurrentLanguage } = toastReactPrime.actions;
export default toastReactPrime.reducer;
