import { configureStore } from "@reduxjs/toolkit";
import postSlices from "./slices/postSlices";

export const store = configureStore({
    reducer: {
        posts: postSlices
    }
})