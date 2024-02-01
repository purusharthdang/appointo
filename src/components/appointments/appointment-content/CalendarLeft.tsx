import React from 'react'
import Calendar from 'react-calendar'
import Icon from '../../lib-components/icon/Icon'
import { CalendarLeftSideProps } from './calendar.types'

const CalendarLeft = ({ title, timezone, handleDateChange, setSelectedDateRange, selectedDateRange }: CalendarLeftSideProps) => {
    return (
        <div className='calendarBody'>
            <div className='calendarTitleContainer'>
                <p className='calendarTitle'>{title}</p>
                <span className='calendarTitleSubheading'>Timezone: {' '} <p style={{ fontWeight: '400' }}>{timezone}</p></span>
            </div>
            <Calendar
                defaultView='month'
                maxDetail='month'
                onChange={(value) => handleDateChange(value)}
                onViewChange={() => setSelectedDateRange({ startDate: '', endDate: '' })}
                prev2Label={null}
                next2Label={null}
                prevLabel={<Icon icon='ChevronLeftIcon' size={20} color='#378760' />}
                nextLabel={<Icon icon='ChevronRightIcon' size={20} color='#378760' />}
                className={['calendarOutline']}
            />
        </div>
    )
}

export default CalendarLeft