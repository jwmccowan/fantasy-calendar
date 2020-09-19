import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const CalendarFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;

export const CalendarElement = styled(Paper).attrs({
  square: true,
  elevation: 0,
})`
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 14.285%;
  }
  flex-grow: 1;
`;

export const CalendarLabel = styled(Typography).attrs({
  component: 'h6',
  variant: 'h6',
})`
  padding: 8px;
`;
