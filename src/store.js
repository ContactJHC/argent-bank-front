import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users";

// store creation

export default configureStore({
    reducer: {
        users: usersReducer
    }
})

