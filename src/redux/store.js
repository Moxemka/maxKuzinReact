import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

export default configureStore({
    reducer: {
        cart: cartSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(defaultMiddlewareConfig)
}) 