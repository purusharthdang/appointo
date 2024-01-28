import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TimeSlotResponse {
    date: string;
    slots: {
        start_time: string,
        end_time: string,
    }[]
}

const initialState: { isLoading: boolean, availableSlots: TimeSlotResponse[] } = {
    isLoading: false,
    availableSlots: [],
};

export const appointmentSlice = createSlice({
    name: 'Appointments state',
    initialState,
    reducers: {
        setAvailableSlots: (state, action: PayloadAction<{ slots: TimeSlotResponse[] }>) => {
            const {
                slots
            } = action.payload
            state.availableSlots = slots;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    },
});

export const {
    setAvailableSlots,
    setIsLoading
} = appointmentSlice.actions;
export default appointmentSlice.reducer;
