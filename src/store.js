import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users";

// store creation : initial state + reducer

export default configureStore({
    reducer: {
        users: usersReducer
    }
})

