import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Redux/Auth/authSlice";
import ChatSlice from "../Redux/Chat/chatSlice";


const store  = configureStore({
    reducer : {
        Auth: authSlice.reducer,
        Chat: ChatSlice.reducer,
    }
})

export default store;