import * as React from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import { CalendarElement, CalendarFlex, CalendarLabel } from '../styles';

const useGetDaysOfWeek = () =>
  React.useMemo<DateTime[]>(() => {
    const first = DateTime.local().startOf('week');
    return [...Array(7)].reduce(
      (prev, _, i) => [...prev, first.plus({ day: i })],
      []
    );
  }, []);

const CalendarHeaderLabel = styled(CalendarLabel)``;

export const CalendarHeader: React.FC = () => {
  const weeks = useGetDaysOfWeek();
  const weekDays = React.useMemo(
    () => weeks.map((day) => day.toFormat('cccc')),
    [weeks]
  );
  return (
    <CalendarFlex>
      {weekDays.map((weekDay) => (
        <CalendarElement key={weekDay}>
          <CalendarHeaderLabel>{weekDay}</CalendarHeaderLabel>
        </CalendarElement>
      ))}
    </CalendarFlex>
  );
};
