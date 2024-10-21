import { configureStore } from '@reduxjs/toolkit';

import toast from './reducers/toast'
import selectLanguage from './reducers/select-language';

export const store = configureStore({
  reducer: {
    toast,
    selectLanguage,
  },
});

export type StoreRootState = ReturnType<typeof store.getState>