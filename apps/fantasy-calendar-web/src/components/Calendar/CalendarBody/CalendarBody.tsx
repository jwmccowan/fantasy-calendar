import { useMediaQuery, Theme } from '@material-ui/core';
import { DateTime } from 'luxon';
import * as React from 'react';
import { DateableProps } from '../Calendar';
import { CalendarBodyElement } from '../CalendarBodyElement';
import { CalendarFlex } from '../styles';

const useGetCalendarDays = (date?: DateTime, padMonths = false) =>
    React.useMemo<DateTime[]>(() => {
        const definedDate = date ?? DateTime.local();
        const start = padMonths ? definedDate.startOf('month').startOf('week') : definedDate.startOf('month');
        const end = padMonths ? definedDate.endOf('month').endOf('week') : definedDate.endOf('month');
        let current = start;
        const days = [];
        while (current <= end) {
            days.push(current);
            current = current.plus({ day: 1 });
        }
        return days;
    }, [date, padMonths]);

export const CalendarBody: React.FC<DateableProps> = ({ date, onSetDate }) => {
    const padMonths = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const days = useGetCalendarDays(date, padMonths);

    return (
        <CalendarFlex>
            {days.map((day) => (
                <CalendarBodyElement current={date} date={day} key={day.toString()} onSetDate={onSetDate} />
            ))}
        </CalendarFlex>
    );
};
