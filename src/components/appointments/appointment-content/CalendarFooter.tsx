import React from 'react'
import Button from '../../lib-components/button/Button'
import { CalendarFooterProps } from './calendar.types'


const CalendarFooter = ({ handleNext }: CalendarFooterProps) => {
    return (
        <div className='calendarFooter'>
            <p>POWERED BY<a style={{ textDecoration: 'none' }} href='https://apps.shopify.com/appointo-appointments-and-bookings'> APPOINTO</a></p>
            <Button
                styles={{
                    padding: '8px 30px',
                    borderRadius: '10px',
                    border: '1px solid var(--Primary-Color, #378760)',
                    background: 'var(--Light-Light-4, #FFF)',
                }}
                iconRight='ChevronRightIcon'
                iconSize={20}
                buttonLabel='Next'
                variant='base'
                onClick={handleNext}
            />
        </div>
    )
}

export default CalendarFooter