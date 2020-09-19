import { Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { MenuContext, useToggle } from '../MenuContext';

const MenuIconContainer = styled(IconButton)`
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

const NavbarTitle = styled(Typography).attrs({
  component: 'h6',
  variant: 'h6',
})`
  flex-grow: 1;
`;

export const AppToolbar: React.FC = () => {
  const [isLoggedIn, toggle] = useToggle();
  const [, dispatch] = React.useContext(MenuContext);

  return (
    <Toolbar>
      <MenuIconContainer edge="start" color="inherit" onClick={dispatch}>
        <MenuIcon />
      </MenuIconContainer>
      <NavbarTitle>{'Calendar'}</NavbarTitle>
      {isLoggedIn && (
        <IconButton color="inherit" onClick={toggle}>
          <AccountCircleIcon />
        </IconButton>
      )}
      {!isLoggedIn && (
        <Button color="inherit" onClick={toggle} variant="text">
          {'Log In'}
        </Button>
      )}
    </Toolbar>
  );
};
