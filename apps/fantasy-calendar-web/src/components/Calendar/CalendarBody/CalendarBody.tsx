import { gql, useQuery } from '@apollo/client';
import { useMediaQuery, Theme } from '@material-ui/core';
import { DateTime } from 'luxon';
import * as React from 'react';
import { DateableProps } from '../Calendar';
import { CalendarBodyElement, CalendarItem } from '../CalendarBodyElement';
import { CalendarFlex } from '../styles';

const GET_CALENDAR_ITEMS = gql`
    query GetCalendarItems($start: String!, $end: String!) {
        calendars {
            id
            calItems(start: $start, end: $end) {
                date
                id
                title
            }
        }
    }
`;

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

    const end = React.useMemo(() => days[days.length - 1]?.toFormat('yyyy-LL-dd'), [days]);
    const start = React.useMemo(() => days[0]?.toFormat('yyyy-LL-dd'), [days]);
    const { data } = useQuery(GET_CALENDAR_ITEMS, { variables: { start, end } });

    const calendarItems: CalendarItem[] =
        data?.calendars.reduce((arr: CalendarItem[], cal: any) => [...arr, ...cal.calItems], []) ?? [];

    return (
        <CalendarFlex>
            {days.map((day) => (
                <CalendarBodyElement
                    current={date}
                    date={day}
                    items={calendarItems.filter((item) => item.date === day.toFormat('yyyy-LL-dd'))}
                    key={day.toString()}
                    onSetDate={onSetDate}
                />
            ))}
        </CalendarFlex>
    );
};
