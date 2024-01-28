/**
 * This file contains all http requests and exported as functions
 */
'https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30'

import axios from "axios"

export interface getTimeSlotPayload {
    startDate: string,
    endDate: string
}

export const getTimeSlotsByDateRange = ({ startDate, endDate }: getTimeSlotPayload) => {
    return axios.get(`https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}`);
}