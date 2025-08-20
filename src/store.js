import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import accountsReducer from "./features/accounts/accountsSlice";
import profileReducer from "./features/profile/profileSlice";
import transactionsReducer from "./features/transactions/transactionsSlice";
import loaderReducer from "./features/loader/loaderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountsReducer,
    profile: profileReducer,
    transactions: transactionsReducer,
    loader: loaderReducer,
  },
});

export default store;
