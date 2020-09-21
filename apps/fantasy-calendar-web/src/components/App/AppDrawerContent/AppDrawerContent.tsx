import * as React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import { NewCalendar } from '../../Calendar/NewCalendar';

export const AppDrawerContent: React.FC = () => (
  <>
    <List>
      <NewCalendar
        render={(toggle) => (
          <ListItem button onClick={toggle}>
            <ListItemIcon>
              <CalendarIcon />
            </ListItemIcon>
            <ListItemText primary={'New Calendar'} />
          </ListItem>
        )}
      />
    </List>
  </>
);
