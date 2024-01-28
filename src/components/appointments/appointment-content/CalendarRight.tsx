import React, { Fragment } from 'react'
import Select from '../../lib-components/select/Select'
import List from '../../lib-components/list/List'
import dayjs from 'dayjs'
import { CalendarRightMenuProps } from './calendar.types'

const CalendarRight = ({
    timeSlotVariant,
    setTimeSlotVariant,
    isLoading,
    filteredSlotsResults,
    selectedTimeSlot,
    setSelectedTimeSlot,
    timezone,
    errorMessage,
}: CalendarRightMenuProps) => {
    return (
        <div className='calendarBody' style={{ background: 'white' }}>
            <div className='calendarTitleContainer'>
                <p className='calendarOptionsTitle'>SELECT FROM VARIANTS</p>
                <Select
                    selectedOption={timeSlotVariant}
                    setSelectedOption={setTimeSlotVariant}
                    dropdownOptions={
                        [{ id: '60', title: '60 minutes' }, { id: '30', title: '30 minutes' }]
                    }
                />
            </div>
            {/* HR */}
            <div style={{ width: '100%', height: 0, border: '1px #C7C9D9 solid' }}></div>
            {/* Time slots */}
            {
                isLoading ?
                    <div className='calendarBody' style={{ background: 'white' }}>
                        <h5>Please wait while we fetch available time slots.</h5>
                    </div>
                    :
                    <div className='calendarTitleContainer'>
                        {filteredSlotsResults?.length > 0 ? filteredSlotsResults.map(slot => {
                            return <Fragment key={slot.date}>
                                <p className='calendarOptionsTitle'>{dayjs(slot?.date ?? '').format('dddd, MMM D')} - AVAILABLE SLOTS</p>
                                <List
                                    className='calendarTimeSlots'
                                    itemClassName='timeSlotButton'
                                    selectedItem={selectedTimeSlot}
                                    setSelectedItem={setSelectedTimeSlot}
                                    listItems={slot.slots.map((timeSlot, index) => (
                                        {
                                            id: (timeSlot.start_time + index),
                                            // Format the hours to the current time zone of client.
                                            title:
                                                dayjs(timeSlot.start_time).tz(timezone).format('HH:mm A') +
                                                "-" +
                                                dayjs(timeSlot.end_time).tz(timezone).format('HH:mm A')
                                        }
                                    ))}
                                />
                            </Fragment>
                        })
                            : <h5>{errorMessage ?? 'Please choose a date range to get available slots, thanks ;)'}</h5>
                        }
                    </div>
            }
        </div>
    )
}

export default CalendarRight