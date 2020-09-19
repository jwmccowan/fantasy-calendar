import * as React from 'react';
import {
  Button,
  Paper,
  Typography,
  useMediaQuery,
  Theme,
} from '@material-ui/core';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import { CalendarHeader } from './CalendarHeader';
import { CalendarBody } from './CalendarBody';
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from '@material-ui/icons';

export type DateableProps = {
  date: DateTime;
  onSetDate: (date: DateTime) => void;
};

const Well = styled(Paper)`
  padding: 16px;
`;

const Flexor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CalendarMonthPicker: React.FC<DateableProps> = ({ date, onSetDate }) => (
  <Flexor>
    <Button variant="text" onClick={() => onSetDate(date.minus({ month: 1 }))}>
      <ArrowBackIosRounded />
    </Button>
    <Typography component="h2" variant="h2">
      {date.toFormat('LLLL yyyy')}
    </Typography>
    <Button variant="text" onClick={() => onSetDate(date.plus({ month: 1 }))}>
      <ArrowForwardIosRounded />
    </Button>
  </Flexor>
);

export const Calendar: React.FC = () => {
  const [date, setDate] = React.useState(DateTime.local().startOf('day'));
  const isBig = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Well>
      <CalendarMonthPicker date={date} onSetDate={setDate} />
      {isBig && <CalendarHeader />}
      <CalendarBody date={date} onSetDate={setDate} />
    </Well>
  );
};
