import * as React from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import { DateableProps } from '../Calendar';
import { CalendarElement, CalendarLabel } from '../styles';
import { Paper, Typography } from '@material-ui/core';

const isSameDay = (d1: DateTime, d2: DateTime) => d1.hasSame(d2, 'day');
const isSameMonth = (d1: DateTime, d2: DateTime) => d1.hasSame(d2, 'month');

const StyledCalendarBodyElement = styled(CalendarElement)`
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
`;

const CalendarBodyElementLabel = styled(CalendarLabel)`
  min-height: 140px;
`;

export type CalendarBodyElementProps = DateableProps & {
  current: DateTime;
};

export const CalendarBodyElement: React.FC<CalendarBodyElementProps> = ({
  current,
  date,
  onSetDate,
}) => {
  const disabled = React.useMemo(() => !isSameMonth(current, date), [
    current,
    date,
  ]);
  return (
    <StyledCalendarBodyElement
      key={date.toString()}
      onClick={() => onSetDate(date)}
    >
      <CalendarBodyElementLabel
        color={disabled ? 'textSecondary' : 'textPrimary'}
      >
        {`${date.toFormat('dd')}${
          isSameDay(date, DateTime.local()) ? ' - now!' : ''
        }`}
        <AgendaItem
          disabled={disabled}
          label={
            "Swallowtail Festival is a fun place to be and I'm happy to be here!"
          }
        />
        <AgendaItem disabled={disabled} label={"Desna's Birthday"} />
      </CalendarBodyElementLabel>
    </StyledCalendarBodyElement>
  );
};

const StyledAgendaItem = styled(Paper)`
  padding: 4px;
  margin-top: 4px;
  cursor: pointer;

  & > p {
    font-size: 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const AgendaItem: React.FC<{ disabled: boolean; label: string }> = ({
  disabled,
  label,
}) => (
  <StyledAgendaItem elevation={1}>
    <Typography
      color={disabled ? 'textSecondary' : 'textPrimary'}
      component="p"
    >
      {label}
    </Typography>
  </StyledAgendaItem>
);
