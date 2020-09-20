import { Button } from '@material-ui/core';
import * as React from 'react';
import { useToggle } from '../../App/MenuContext';
import { NewCalendarDialog } from './NewCalendarDialog';

export type NewCalendarProps = { render?: (toggle: () => void) => void };
export const NewCalendar: React.FC<NewCalendarProps> = ({ render }) => {
  const [open, toggle] = useToggle();
  return (
    <>
      {render ? render(toggle) : <Button onClick={toggle}>{'New Calendar'}</Button>}
      <NewCalendarDialog onClose={toggle} open={open}></NewCalendarDialog>
    </>
  );
};
