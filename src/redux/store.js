import { configureStore } from '@reduxjs/toolkit';
import SlotSelectDataReducer from '../redux/slices/slotSelectionSlice.js';
import CommonDataReducer from '../redux/slices/commonDataSlice.js';
import UserDataReducer from '../redux/slices/userSlice.js';
import AccountReducer from '../redux/slices/accountsSlice.js';

export const store = configureStore({
  reducer: {
    slotSelectData:SlotSelectDataReducer,
    commonData:CommonDataReducer,
    userData:UserDataReducer,
    accountData:AccountReducer,
  },
})