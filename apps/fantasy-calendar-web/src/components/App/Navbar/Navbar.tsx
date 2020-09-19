import * as React from 'react';
import { AppBar } from '@material-ui/core';
import styled from 'styled-components';
import { squanchedNavbar, squanchTransition } from '../styles';
import { AppToolbar } from '../AppToolbar';
import { MenuContext } from '../MenuContext';

const StyledAppBar = styled(AppBar)<{ isSquanched: boolean }>`
  ${({ theme }) => theme.breakpoints.up('md')} {
    ${squanchTransition}
    ${({ isSquanched }) => (isSquanched ? squanchedNavbar : '')}
  }
`;

export const AppNavbar: React.FC = () => {
  const [isSquanched] = React.useContext(MenuContext);

  return (
    <StyledAppBar isSquanched={isSquanched} position={'fixed'}>
      <AppToolbar />
    </StyledAppBar>
  );
};
