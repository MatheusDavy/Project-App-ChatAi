import { configureStore } from '@reduxjs/toolkit';

import toast from './reducers/toast'

export const store = configureStore({
  reducer: {
    toast,
  },
});

export type StoreRootState = ReturnType<typeof store.getState>