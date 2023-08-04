import { configureStore } from "@reduxjs/toolkit";
import  usersSlice  from "./slice/UserSlice";

const store = configureStore({
    reducer:{
        users:usersSlice.reducer,
    }
})


export default store;