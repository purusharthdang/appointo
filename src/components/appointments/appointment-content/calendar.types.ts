import { Dispatch, SetStateAction } from "react";
import { getTimeSlotPayload } from "../../../connections/connections";
import { TimeSlotResponse } from "../../../connections/reducers/appoinments";

export interface CalendarProps {
    timezone: string;
    title: string
}

export interface CalendarLeftSideProps extends CalendarProps {
    selectedDateRange: getTimeSlotPayload;
    handleDateChange: (value: any) => void;
    setSelectedDateRange: Dispatch<SetStateAction<getTimeSlotPayload>>
}

export interface CalendarRightMenuProps {
    timeSlotVariant: string
    setTimeSlotVariant: Dispatch<SetStateAction<string>>
    isLoading: boolean
    filteredSlotsResults: TimeSlotResponse[]
    selectedTimeSlot: string
    setSelectedTimeSlot: Dispatch<SetStateAction<string>>
    timezone: string,
    errorMessage: string | undefined,
}
export interface CalendarFooterProps {
    handleNext: () => void;
}