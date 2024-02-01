import React, { useEffect, useMemo, useState } from 'react'
import { CalendarProps } from './calendar.types'
import 'react-calendar/dist/Calendar.css';
import { getTimeSlotPayload, getTimeSlotsByDateRange } from '../../../connections/connections';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { setAvailableSlots, setIsLoading } from '../../../connections/reducers/appoinments';
import { RootState } from '../../../connections/store';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import CalendarFooter from './CalendarFooter';
import CalendarLeft from './CalendarLeft';
import CalendarRight from './CalendarRight';
import toast from 'react-hot-toast';

dayjs.extend(utc);
dayjs.extend(timezone);

const CalendarComponent = ({ title, timezone }: CalendarProps) => {
    const dispatch = useDispatch();
    const [timeSlotVariant, setTimeSlotVariant] = useState<string>('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
    const [selectedDateRange, setSelectedDateRange] = useState<getTimeSlotPayload>({ startDate: '', endDate: '' });
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    const { isLoading, availableSlots } = useSelector((state: RootState) => state.appointments)

    const handleDateChange = (value: any) => {
        setSelectedDate(dayjs(value).format('YYYY-MM-DD'))
        setSelectedDateRange({
            startDate: dayjs(value).startOf('month').format('YYYY-MM-DD'),
            endDate: dayjs(value).endOf('month').format('YYYY-MM-DD'),
        })
    }

    const handleNext = () => {
        if (selectedTimeSlot) {
            toast.success('Congratulations on booking your appointment');
            setSelectedDateRange({
                startDate: '',
                endDate: ''
            })
            setSelectedTimeSlot('');
            dispatch(setAvailableSlots({ slots: [] }));
            return;
        } else {
            toast.error('Oops! Please choose a time slot before moving forward!')
        }
    }

    const slotsFilterBasedOnVariant = useMemo(() => {
        const slotVariantInHours = timeSlotVariant === '30' ? 0.5 : 1;
        return availableSlots.length > 0 ? availableSlots.map((dateAndSlots) => {
            return {
                ...dateAndSlots, slots: dateAndSlots.slots.filter(slot => dayjs(slot.end_time).diff(dayjs(slot.start_time), 'hour') <= slotVariantInHours)
            }
        }
        ) : [];
    }, [timeSlotVariant, availableSlots]);

    const slotsFilteredBasedOnDates = useMemo(() => {
        if (slotsFilterBasedOnVariant.length > 0 && selectedDate) {
            return slotsFilterBasedOnVariant.filter((dateAndSlot) => dateAndSlot.date === selectedDate);
        } else return []

    }, [slotsFilterBasedOnVariant, selectedDate])

    useEffect(() => {
        if (selectedDateRange.startDate !== '' && selectedDateRange.endDate !== '') {
            dispatch(setIsLoading(true))
            getTimeSlotsByDateRange(selectedDateRange).then((res) => {
                dispatch(setAvailableSlots({ slots: res.data }));
                dispatch(setIsLoading(false));
            }).catch((err) => {
                console.log(err);
                setErrorMessage('There is a problem getting time slots, please try later or choose another date range.');
                dispatch(setIsLoading(false))
                dispatch(setAvailableSlots({ slots: [] }));

            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(selectedDateRange)])

    return (
        <div className='calendarComponentLayout'>
            <div className='calendarAndMenuBox'>
                {/* Calendar Left Body */}
                <CalendarLeft
                    setSelectedDateRange={setSelectedDateRange}
                    selectedDateRange={selectedDateRange}
                    timezone={timezone}
                    title={title}
                    handleDateChange={handleDateChange}
                />
                {/* Calendar right side Menu */}
                <CalendarRight
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    timeSlotVariant={timeSlotVariant}
                    timezone={timezone}
                    selectedTimeSlot={selectedTimeSlot}
                    setSelectedTimeSlot={setSelectedTimeSlot}
                    setTimeSlotVariant={setTimeSlotVariant}
                    filteredSlotsResults={slotsFilteredBasedOnDates}
                />
            </div>
            {/* Calendar Footer */}
            <CalendarFooter handleNext={handleNext} />
        </div>
    )
}

export default CalendarComponent