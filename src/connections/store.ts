import { configureStore } from "@reduxjs/toolkit";
import appointmentSlice from "./reducers/appoinments";

export const store = configureStore({
    reducer: {
        appointments: appointmentSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;