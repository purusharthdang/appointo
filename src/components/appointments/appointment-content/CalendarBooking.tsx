import React from 'react'
import './calendar.css'
import CalendarComponent from './CalendarComponent'

const CalendarBooking = () => {
    const clientTimezone = localStorage.getItem('clientTimeZone')
    return (
        <div className='calendarContainer'>
            <div className='calendarAndBookingBody'>
                <CalendarComponent title='Test Service' timezone={clientTimezone ?? 'Asia/Kolkata'} />
            </div>
        </div>
    )
}

export default CalendarBooking